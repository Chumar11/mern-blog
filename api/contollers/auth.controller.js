import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  try {
    const person = req.body;
    if (!person.username || !person.email || !person.password) {
      return next(errorHandler(400, "All fields are required "));
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
    next(err);
  }
};
