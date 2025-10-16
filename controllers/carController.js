import Strip from "stripe";
import CarSchema from "../model/carSchema.js";
import UserSchema from "../model/userSchema.js";
import dotenv from "dotenv";
import bookingSchema from "../model/bookingSchema.js";
dotenv.config();


const carMethodes = {
    // function that allow admin add new car in the site 
    addCar: async (req, res) => {
         console.log("the requuuuuuuuuuuuuuuuuuest"+req.body)
        try {
            const stripe = new Strip(process.env.SECRET_KEY);
           
            const { image, priceByDay, name, mark, description, seats, tankType, gearboxType, place, addBy, year, category } = req.body;
            if ( !priceByDay || !name || !mark  || !description || !seats || !tankType || !gearboxType || !place || !addBy || !year || !category) {
                return res.status(404).json({ "msg": "All Fields Are Required" });

            } else {
                const existingAdmin = await UserSchema.findOne({ uid: addBy });
                if (!existingAdmin) {
                    return res.status(404).json({ "msg": "The User Not Exist " });
                } else {
                    //generate cid ( we combine bitween random and date to never get duplicate cid in our db ):
                    const cid = Date.now() + Math.floor(Math.random() * 10000);

                    console.log(cid);

                    // 1. Create product
                    const product = await stripe.products.create({
                        name: name,
                        images: (!image ||image.length===0)?[]:[image],
                        description: description,
                        // images: image || [],
                        metadata: {
                            createdBy: existingAdmin?.uid || 'anonymous',
                        }
                    });
                    const stripId = product.id;
                    console.log(stripId);
                    console.log("the product is created ");
                    // difine the price of the product (the car)
                    const price = await stripe.prices.create({
                        product: product.id,
                        currency: "usd", // like "usd"
                        unit_amount: priceByDay * 100,  // in cents
                    });
                    const newCar = await new CarSchema({
                        addBy,
                        cid,
                        image,
                        priceByDay,
                        name,
                        mark,
                        featers,
                        description,
                        category,
                        year,
                        info: {
                            seats,
                            tankType,
                            gearboxType,
                            place,
                        },
                        stripId,
                    });
                    await newCar.save();
                    console.log(newCar);
                    return res.status(200).json({ "msg": "The Car Is Add Succusfuly", newCar });
                }
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ "msg": "Internel Server Error" });

        }
    },
    // function of desplay all cars in the DB to the useers (we need to implement the pagination here for better performence)
    showAllCars: async (req, res) => {
        try {
            let allcars = [];
            allcars = await CarSchema.find({}, {
                avaibility: 1,
                info: 1,
                name: 1,
                mark: 1,
                priceByDay: 1,
                cid: 1,
                _id: 0
                // we use the sort here becouse the user wont to see the availebal cars firs then he can see the cars that are not available
            }).sort({ avaibility: -1 });
            if (allcars.length === 0) {
                res.status(400).json({ "msg": "No Car availebel Now " });
            } else {
                res.status(200).json({ "msg": "sucssus", allcars });
            }

        } catch (error) {
            console.log(error);
            res.status(500).json({ "msg": "Internel Server Error" });
        }
    },
    // function of the details of the can taht desplay to the user 
    cad_datails: async (req, res) => {
        try {
            console.log(req.params);
            const cid = req.params.cid;
            console.log();
            if (!cid) {
                return res.status(404).json({ "msg": "The Cid Is Required " });
            }
            const existingCar = await CarSchema.findOne({ cid });
            if (!existingCar) {
                return res.status(400).json({ "msg": "There is No Car By This ID In DB " });
            } else {
                return res.status(200).json({ "msg": "succus", existingCar });
            }

        } catch (error) {
            console.log(error);
            res.status(500).json({ "msg": "Internel Server Error" });
        }
    },
    // function of delete car by the admin 
    delete_car: async (req, res) => {
        try {
            console.log(req.params);
            const cid = req.params.cid;
            console.log(cid);
            if (!cid) {
                return res.status(404).json({ "msg": "The Cid Is Required " });
            }
            const existingCar = await CarSchema.findOne({ cid });
            if (!existingCar) {
                return res.status(404).json({ "msg": "The Car Is Not Existing In The DB" });
            } else {
                await CarSchema.deleteOne({ cid });
                return res.status(201).json({ "msg": "delete succusfuly " });
            }


        } catch (error) {
            console.log(error);
            res.status(500).json({ "msg": "Internel Server Error" });
        }
    },
    // function that give the admine the total number of cars that he is creating in the site 
    admine_total_cars_num: async (req, res) => {

        try {
            console.log(req.body);
            const { admin } = req.body;
            if (!admin) {
                return res.status(400).json({ "msg": "All Fields Are Required " });
            } else {
                console.log(admin);
                const exsistingUser = await UserSchema.findOne({ uid: admin });
                if (!exsistingUser) {
                    return res.status(404).json({ "msg": "User Not Found" });
                } else {

                    const carsNumber = await CarSchema.countDocuments({ addBy: exsistingUser.uid });
                    return res.status(200).json({ "msg": "succuss", carsNumber });

                }

            }


        } catch (error) {
            console.log(error);
            //handeling errors 
            return res.status(501).json({ "msg": "internel server errro please try leater " });
        }
    },
    // function thwt give the Admin his cars (in this func we give him all info about his cars not only number )
    admine_total_cars: async (req, res) => {

        try {
            console.log(req.body);
            const { admin } = req.body;
            if (!admin) {
                return res.status(400).json({ "msg": "All Fields Are Required " });
            } else {
                console.log(admin);
                const exsistingUser = await UserSchema.findOne({ uid: admin });
                if (!exsistingUser) {
                    return res.status(404).json({ "msg": "User Not Found" });
                } else {

                    const allAdminCars = await CarSchema.find({ addBy: exsistingUser.uid });
                    return res.status(200).json({ "msg": "succuss", allAdminCars });

                }

            }


        } catch (error) {
            console.log(error);
            //handeling errors 
            return res.status(501).json({ "msg": "internel server errro please try leater " });
        }
    },
    search_car_by_name: async (req, res) => {

        try {
            console.log(req.body);
            const { carName } = req.body;
            console.log(carName);
            if (!carName) {
                return res.status(400).json({ "msg": "All Fields Are Required" });
            } else {
                let carsArr = [];
                carsArr = await CarSchema.find({ name: { $regex: `^${carName}`, $options: "i" } }).limit(6);
                return res.status(200).json({ "msg": "sucuss", carsArr })
            }


        } catch (error) {
            console.log(error);
            //handeling errors 
            return res.status(501).json({ "msg": "internel server errro please try leater " });
        }
    },
    // the funtion of fiter car by location and time of pik_up and retour 
    filter_car: async (req, res) => {

        try {
            console.log(req.body);

            const { location, Pick_up_Date, Return_Date } = req.body;
            if (!location || !Pick_up_Date || !Return_Date) {
                return res.status(400).json({ "msg": "All Fields Are Required" });
            } else {
                let result = [];
                // convert the string to date format
            const  Pick_up_Date_obj =new Date(Pick_up_Date);
                result = await CarSchema.find({ avaibility: true, "info.place": location })
                const aggregateResult = await bookingSchema.aggregate([
                    {
                        $match: {
                            status: true,
                            Return_Date:{ $lte: Pick_up_Date_obj},
                        }},
                       { $lookup: {
                            from: "carschemas",
                            localField: "cid",
                            foreignField: "cid",
                            as: "availableCars"
                        }
                    }


                ]);
                console.log("2025-10-13T20:27:24.000+00:00"<"2025-10-14T21:50:00Z");
                console.log(aggregateResult);
                if (aggregateResult.length !== 0) {
                    aggregateResult.forEach(element => {
                        result.push(element.availableCars);
                    });
                   
                }
                return res.status(200).json({ "msg": "succuss", result });
            }


        } catch (error) {
            console.log(error);
            //handeling errors 
            return res.status(501).json({ "msg": "internel server errro please try leater " });
        }
    },



}
export default carMethodes;
