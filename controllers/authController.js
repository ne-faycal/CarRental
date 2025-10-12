
import Userschema from "/Users/faycalabdelhadinemouchi/Documents/nodeProjects/CarRentalProject/model/userSchema.js";
import bcrypt from "bcryptjs";
import zod, { email, ZodError } from "zod";
import env from "dotenv";
env.config();
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

////////////// function to use in the controllers //////////////////////////
// creat transporter with nodemailer package 
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.email,
        pass: process.env.password
    }
}
);

// function od generate arndom otp 
const generateOtp = (numberOfOtp) => {
    let otp = "";
    for (let index = 0; index < numberOfOtp; index++) {
        otp += Math.floor(Math.random() * 10);

    }
    return otp;
}


// validation to data before creating an object in DB
const validationSchema = zod.object(
    {
        firstName: zod.string().min(3),
        famillyName: zod.string().min(3),
        email: zod.email().min(6),
        password: zod.string().min(6),
    }
);
// function of generate a jwt 
const creatToken = (email) => {
    return jwt.sign({ email }, process.env.secret_key, {
        expiresIn: 3600 / 4,

    });
}
// jenerate refresh token 
const generateRefreshToken = (email) => {
    return jwt.sign({ email }, process.env.secret_key, {
        expiresIn: 3600 * 24,
    })
}
////////////// start of controllers //////////////////////////

const authMethods = {
    // the registerlogique 
    register:async (req, res) => {
    try {
        console.log(req.body);
        const {  email, password, password2,famillyName ,firstName,phoneNumber} = req.body;
        validationSchema.parse({
            firstName:firstName,
            famillyName: famillyName,
            email: email,
            password: password,
        });
        // required field validation 
        const existinguser = await Userschema.findOne({ email: email });
        if (password !== password2) {
            return res.status(400).json({ "msg": "password does not match" });
        } else if (existinguser && existinguser.isVerified) {

            return res.status(404).json({ "msg": "User aleardy exist " });

        } else {
            if (existinguser && !existinguser.isVerified) {
                await Userschema.deleteOne({ email });
            }
            const seltRound = 10;
            let hashedPassword;
            let salt;
            salt = await bcrypt.genSalt(seltRound);
            console.log("salt :" + salt);
            hashedPassword = await bcrypt.hash(password, salt);
            console.log("hashed password :" + hashedPassword);
            const uid = Date.now()+ Math.floor(Math.random() * 10000);

            const user = {
                firstName: firstName,
                famillyName:famillyName,
                phoneNumber:phoneNumber,
                password: hashedPassword,
                email: email,
                uid:uid
            }
            console.log(user);
            await new Userschema(
                user
            ).save()
            // call generate otp function with length= 4 : 
            const otp = generateOtp(4);
            console.log(otp);
            const secObtions = {
                from: process.env.email,
                to: email,
                subject: "account verification",
                text: `your otp for verification account is ${otp}`,
            }
            await transporter.sendMail(secObtions, (err, info) => {
                if (err) {
                    return console.log("Error while sending email:", err);
                }
                console.log("Email sent: " + info.response);

            });
            // update the otp field in the ducument with the otp value (it's valid in 1 min that is defined in the schema )
            await Userschema.updateOne({ email: user.email }, {
                $set: {
                    otp: otp
                }
            });
            return res.status(200).json({ "msg": "user register succusfuly" });

        }
    } catch (error) {
        console.log(error);
        //handeling errors 
        if (error instanceof ZodError) {
            const errArray = [];
            error.errors.forEach(element => {
                errArray.push(element.message);
            });
            return res.status(501).json({ "msg": errArray });
        } else {

            return res.status(501).json({ "msg": "internel server errro please try leater " });
        }
    }
},
// the login logique 
login :async (req, res) => {

    try {
        console.log(req.body);
        const { email, password } = req.body;
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            console.log("email not valide");
            return res.status(400).json({ "msg": "email not valide" });
        }
        if (!email || !password) {
            return res.status(401).json({ "msg": "Enter All Fields Pleas" });
        }
        const existinguser = await Userschema.findOne({ email });
        
        if (!existinguser || existinguser &&!existinguser.isVerified) {
            return res.status(404).json({ "msg": "The User Is Not Regiter Please Register First" });

        } else {
            console.log("its pass here");
            console.log(existinguser.password);
            const isPassCorect = await bcrypt.compare(password, existinguser.password);
            console.log(isPassCorect);
            if (isPassCorect) {
                const token = creatToken(existinguser.email);
                const refreshToken = generateRefreshToken(existinguser.email);
                console.log("the access token is : " + token);
                console.log("the refreash token is : " + refreshToken);
                res.status(200).json({ "msg": "User Login Succesfuly",token });
            } else {
                return res.status(401).json({ "msg": "Wrong Password try again " });
            }

        }
    } catch (error) {
        console.log(error);
        console.log(error);
        //handeling errors 
        return res.status(501).json({ "msg": "internel server errro please try leater " });
    }
},
// function of verify account (when the user do the registrition)
verify_account:async (req, res) => {
    try {
        console.log(req.body);
        const { email, otp } = req.body;
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            console.log("email not valide");
            return res.status(400).json({ message: "email not valide" });
        }

        const existingUser = await Userschema.findOne({ email });
        if (!email || !existingUser) {
            res.status(404).json({ "msg": "the user is not register please register first " });
        } else {
            if (existingUser.expiredOtp < Date.now()) {
                res.status(401).json({ "msg": "the otp is already expired " });
            } else if (existingUser.otp !== otp) {
                return res.status(400).json({ "msg": "the otp is not correct " });
            } {
                existingUser.isVerified = true;
                await existingUser.save();
                return res.status(200).json({ "msg": "the account is verified succusfuly " });
            }
        }

    } catch (error) {
        console.log(error);
        return res.status(501).json({ "msg": "internel server errro please try leater " });
    }


},
// function of reset otp (call it in the cas of forget pass )
reset_otp: async (req, res) => {

    try {
        const { email } = req.body;
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            console.log("email not valide");
            return res.status(400).json({ message: "email not valide" });
        }
        if (!email) {
            res.status(400).json({ "msg": "please enter the email" });
        }

        console.log(email);
        const existingUser = await Userschema.findOne({ email });
        console.log(existingUser);
        if (!existingUser) {
            console.log()
            return res.status(404).json({ "msg": "the user is not existe " });
        } else {
            //call generate top method 
            const otp = generateOtp(4);
            console.log(otp);
            existingUser.otp = otp;
            console.log(Date.now());
            existingUser.expiredOtp = Date.now() + 1000 * 60 * 3;
            const secObtions = {
                from: process.env.email,
                to: existingUser.email,
                subject: "reset otp",
                text: `your otp for verification account is ${otp}`,
            }
            await transporter.sendMail(secObtions, (err, info) => {
                if (err) {
                    return console.log("Error while sending email:", err);
                }
                console.log("Email sent: " + info.response);

            });
            await existingUser.save();
            return res.status(200).json({ "msg": "the otp is send succusfuly" });
        }



    } catch (error) {
        console.log(error);
        return res.status(501).json({ "msg": "internel server errro please try leater " });

    }


},
// function of forget password 
forget_password: async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            console.log("email not valide");
            return res.status(400).json({ message: "email not valide" });
        }
        if (!email || !otp || !newPassword) {
            return res.status(401).json({ "msg": "All fields are required " });
        } else {
            let existingUser = await Userschema.findOne({ email });
            if (!existingUser) {
                return res.status(404).json({ "msg": "User not found " });

            } else {
                if (existingUser.otp !== otp) {
                    return res.status(400).json({ "msg": "your are passing wrong otp try again" });
                } else if (existingUser.expiredOtp < Date.now()) {
                    return res.status(400).json({ "msg": "the otp is expired try with other otp " });
                } else {
                    const seltRound = 10;
                    let hashedPassword;
                    let salt;
                    salt = await bcrypt.genSalt(seltRound);
                    console.log("salt :" + salt);
                    hashedPassword = await bcrypt.hash(newPassword, salt);
                    console.log("hashed password :" + hashedPassword);

                    await Userschema.updateOne({ email },
                        {
                            $set: {
                                password: hashedPassword
                            }
                        }
                    );
                    return res.status(200).json({ "msg": "the password is changing succusfuly" });
                }
            }
        }
    } catch (error) {

    }
}
}
export default authMethods;