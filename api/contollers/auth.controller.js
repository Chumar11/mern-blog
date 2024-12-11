import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  try {
    const person = req.body;
    if (!person.username || !person.email || !person.password) {
      return res.status(400).json({ message: "All fields Required " });
    }
    const hashPassword = bcryptjs.hashSync(person.password, 10);

    const newPerson = new User({
      username: person.username,
      email: person.email,
      password: hashPassword,
    });
    const response = await newPerson.save();
    res.status(200).json({ message: "saved Sucessfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
