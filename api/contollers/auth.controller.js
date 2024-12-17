import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

//  sign UP

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

// signIn

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "All fields are required"));
  }
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(404, "Invalid User");
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(404, "Invalid User"));
    }

    const token = jwt.sign(
      {
        Id: validUser._id,
      },
      process.env.JWT_SECRET
    );
    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (err) {
    next(err);
  }
};
