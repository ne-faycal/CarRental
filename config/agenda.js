import Agenda from "agenda";
import CarSchema from "/Users/faycalabdelhadinemouchi/Documents/nodeProjects/CarRentalProject/model/carSchema.js";
import bookingSchema from "/Users/faycalabdelhadinemouchi/Documents/nodeProjects/CarRentalProject/model/bookingSchema.js";
const agenda = new Agenda({ db: { address: process.env.DB_URL } });
// defin the action that happen when we called agenda by specifique time
agenda.define("update_car_status", async (job) => {
  const {cid,Bid} = job.attrs.data;
  console.log(`updating the Status of the car : ${cid} `);

  // Example: update booking status
  await CarSchema.updateOne({ cid: cid }, { $set:{avaibility: true} });
  await bookingSchema.updateOne({ cid: cid }, { $set:{status: false} });
});
// starting  agenda 
await agenda.start();
export default agenda ;