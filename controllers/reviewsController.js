import ReviewsSchema from "/Users/faycalabdelhadinemouchi/Documents/nodeProjects/CarRentalProject/model/reviews.js";
import UserSchema from "/Users/faycalabdelhadinemouchi/Documents/nodeProjects/CarRentalProject/model/userSchema.js";
const ReviewsMethods = {
    // function of add new review
    add_review:async (req,res)=>{
        try {
            console.log(req.body);
            const {stars,comment,uid}=req.body;
            if (!stars||!comment||!uid) {
              return  res.status(400).json({"msg":"All Fields Are Required"});
            }else{
                const existingUser = await UserSchema.findOne({uid});
                if (!existingUser) {
                  return  res.status(404).json({"msg":"User Not Found"}); 
                }else{
                    const date =  Date.now();
                    const rid = Date.now()+ Math.floor(Math.random() * 10000);
                    const newReview = new ReviewsSchema({
                        uid,
                        stars,
                        rid,
                        comment,
                        creationDate:date

                    });
                    newReview.save();
                    console.log(newReview);
                    return res.status(200).json({"msg":"succuss",newReview});
                }
            }

        } catch (error) {
              console.log(error);
            //handeling errors 
            return res.status(501).json({ "msg": "internel server errro please try leater " });
        }
    },  
    //function of delete review
    delete_review:async (req,res)=>{
        try {
            console.log(req.body);
            const {rid}=req.body;
            if (!rid) {
              return  res.status(400).json({"msg":"All Fields Are Required"});
            }else{
                const existingreviw = await ReviewsSchema.findOne({rid});
                if (!existingreviw) {
                  return  res.status(404).json({"msg":"Review Not Found"}); 
                }else{
                   await ReviewsSchema.deleteOne({rid});
                  return res.status(201).json({"msg":"review deleted succesfuly"});
            }
        }
        } catch (error) {
              console.log(error);
            //handeling errors 
            return res.status(501).json({ "msg": "internel server errro please try leater " });
        }
    }, 
    show_all_reviews :async (req,res)=>{
        try {
            let allReviews =[];
            allReviews = await ReviewsSchema.find();
            if (allReviews.length===0) {
                res.status(404).json({"msg":"No Product Is Available Now"});
            }else{
                console.log(allReviews)
                res.status(200).json({"msg":"succuss",allReviews});
            }
        } catch (error) {
              console.log(error);
            //handeling errors 
            return res.status(501).json({ "msg": "internel server errro please try leater " });
        }
    }, 


}
export default ReviewsMethods;