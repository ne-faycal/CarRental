import UserSchema from "/Users/faycalabdelhadinemouchi/Documents/nodeProjects/CarRentalProject/model/userSchema.js";
import bookingSchema from "/Users/faycalabdelhadinemouchi/Documents/nodeProjects/CarRentalProject/model/bookingSchema.js";
import CarSchema from "/Users/faycalabdelhadinemouchi/Documents/nodeProjects/CarRentalProject/model/carSchema.js";
import agenda from "/Users/faycalabdelhadinemouchi/Documents/nodeProjects/CarRentalProject/config/agenda.js";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();
const BookingMethods = {
    // function of creating a new booking (its exucuted when the user click to book now button )
    creat_booking: async (req, res) => {

        try {
            const currentDate = new Date().toISOString();
            console.log(currentDate)
            const stripe = new Stripe(process.env.SECRET_KEY);
            console.log(req.body);
            const { client, cid, Pick_up_Date, Return_Date, stripId} = req.body;     
            const Pick_up_DateObj = new Date(Pick_up_Date);
             console.log(currentDate>Pick_up_DateObj);
            if (!client || !cid || !Pick_up_Date || !Return_Date||!stripId) {
                return res.status(404).json({ "msg": "all Fields Are Requeried" });
            } if (Pick_up_Date > Return_Date) {
                return res.status(404).json({ "msg": "The Date Is Invalide" });
            } else {
                const existingCar = await CarSchema.findOne({ cid });
                if (!existingCar) {
                    return res.status(400).json({ "msg": "No Car In The DB with This Cid " });
                } else if (existingCar.addBy === client) {
                    return res.status(400).json({"msg": "You Are Not Authorized To do This Operation"});
                } else if (existingCar.avaibility === false) {
                    return res.status(400).json({ "msg": "The Car Is Already Booking" });
                }else{
                    const existingUser = await UserSchema.findOne({ uid: client });
                    if (!existingUser) {
                        return res.status(404).json({ "msg": "The User Is Not Existing In The DB" });
                    } else {
                        let bookingTime;
                        const iniPrice = existingCar.priceByDay;
                        // calculate the booking time by day 
                        console.log(Pick_up_DateObj);
                        let Return_DateObj = new Date(Return_Date);
                        console.log(Return_DateObj);
                        bookingTime = Return_DateObj - Pick_up_DateObj;
                        console.log("the deff in minutes" + bookingTime / (1000 * 60));
                        const totalPrice = (bookingTime * iniPrice) / (24 * 1000 * 60 * 60);
                        console.log(totalPrice);
                        const Bid = Date.now() + Math.floor(Math.random() * 10000);

                        const prices = await stripe.prices.list({
                            product: stripId,
                            active: true,
                            limit: 1,
                        });
                        if (!prices.data.length) {
                            return res.status(404).json({ error: "No price found for this product" });
                        }
                        const priceId = prices.data[0].id;
                        //  Create a Checkout session
                        const session = await stripe.checkout.sessions.create({
                            mode: "payment",
                            payment_method_types: ["card"],
                            line_items: [
                                {
                                    price: priceId,
                                    quantity: 1,
                                },
                            ],
                            success_url: "https://commons.wikimedia.org/wiki/File:Anime_Girl.png?uselang=fr",
                            cancel_url: "https://commons.wikimedia.org/wiki/File:Anime_Girl.png?uselang=fr",
                        });
                        const newBooking = await new bookingSchema({
                            Bid,
                            cid,
                            Admin: existingCar.addBy,
                            client: client,
                            Pick_up_Date,
                            Return_Date,
                            totalPrice: totalPrice,
                            status: true,
                            creationDate: Date.now()

                        });
                        await newBooking.save();
                        await CarSchema.updateOne({ cid }, {
                            $set: { avaibility: false }
                        });
                        console.log(Return_Date)
                        const now = new Date();
                        await agenda.schedule(Return_DateObj, "update_car_status", {
                            cid: cid,
                            Bid:Bid,
                        });


                        return res.status(200).json({ "msg": "succus", newBooking , url: session.url });

                    }
                }
            }
        } catch (error) {
            console.log(error);
            console.group(Date.now())
            //handeling errors 
            return res.status(501).json({ "msg": "internel server errro please try leater " });
        }
    },
    // function to show addmin the number of all his bookings that are already done and thats are not done yet 
    Admine_all_bookings_number: async (req, res) => {
        try {
            console.log(req.body);
            const { admin } = req.body;
            if (!admin) {
                res.status(404).json({ "msg": "All Fields Are Required " });
            } else {
                const existingUser = await UserSchema.findOne({ uid: admin });
                if (!existingUser) {
                    res.status(404).json({ "msg": "The Admin Is Not Found " });
                } else {
                    const bookingNumber = await bookingSchema.countDocuments({ Admin: admin });
                    return res.status(200).json({ "msg": "succuss", bookingNumber });
                }
            }
        } catch (error) {
            console.log(error);
            //handeling errors 
            return res.status(501).json({ "msg": "internel server errro please try leater " });
        }
    },
    // function of calculat admin monthly revenue 
    Admine_monthly_revenue: async (req, res) => {

        try {
            console.log(req.body);
            const { admin } = req.body;
            const now = new Date();
            const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
            console.log(startOfMonth);
            const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
            console.log(startOfNextMonth);


            if (!admin) {
                res.status(404).json({ "msg": "All Fields Are Required " });
            } else {
                const existingUser = await UserSchema.findOne({ uid: admin });
                if (!existingUser) {
                    res.status(404).json({ "msg": "The Admin Is Not Found " });
                } else {
                    const monthlyRevenueArr = await bookingSchema.aggregate([
                        {
                            $match: {
                                Admin: admin,
                                creationDate: {
                                    $gte: startOfMonth,
                                    $lt: startOfNextMonth,
                                }
                            }
                        },
                        {
                            $group: {
                                _id: null,
                                monthlyRevenue: { $sum: "$totalPrice" }
                            }
                        }
                    ]);
                    const monthlyRevenue = monthlyRevenueArr[0]?.monthlyRevenue || 0;
                    return res.status(200).json({ "msg": "succuss", monthlyRevenue });

                }
            }

        } catch (error) {
            console.log(error);
            //handeling errors 
            return res.status(501).json({ "msg": "internel server errro please try leater " });
        }
    },
    // function that give the admin his last 4 bookings     
    Recent_Booking: async (req, res) => {

        try {
            console.log(req.body);
            const { admin } = req.body;
            if (!admin) {
                res.status(404).json({ "msg": "All Fields Are Required " });
            } else {
                const existingUser = await UserSchema.findOne({ uid: admin });
                if (!existingUser) {
                    res.status(404).json({ "msg": "The Admin Is Not Found " });
                } else {
                    const recentBookings = await bookingSchema.find({ Admin: admin }).sort({ creationDate: -1 }).limit(4);
                    return res.status(200).json({ "msg": "succuss", recentBookings });

                }
            }

        } catch (error) {
            console.log(error);
            //handeling errors 
            return res.status(501).json({ "msg": "internel server errro please try leater " });
        }
    },
}
export default BookingMethods;