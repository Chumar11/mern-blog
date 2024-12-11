import User from "../models/user.model.js";
export const userFunction = async (req, res) => {
  try {
   res.send("Helo welcome")
  } catch (err) {
    console.log(err);
  }
};
