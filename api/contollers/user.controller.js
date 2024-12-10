import User from "../models/user.model.js";
export const userFunction = async (req, res) => {
  try {
    const person = req.body;
    const newPerson = new User(person);
    const response = await newPerson.save();
  } catch (err) {
    console.log(err);
  }
};
