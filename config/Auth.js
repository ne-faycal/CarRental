import jwt  from"jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secretAcces = process.env.secret_key;

const isAuthunticated = async (req, res, next) => {
  console.log(req.headers);
  const authHeader = req.headers["authorization"];
  console.log(authHeader);

  let accestoken;
  if (authHeader != null) {
    accestoken = authHeader.split(" ")[1];
  } else {
    return res.status(400).json({ msg: " no token in the headers " });
  }

  console.log(accestoken);
  if (accestoken === null) {
    return res.status(400).json({ msg: "user not authurised token dosen't exist " });
  }

  jwt.verify(accestoken, secretAcces, (err, user) => {
    if (err)
      return res.status(400).json({ msg: " token not valid call refresh end_point " });
    next();
  });
};
export default isAuthunticated ;