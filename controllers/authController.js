import User from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import jwt from "jsonwebtoken";

// Register User
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    if (!name || !email || !password || !phone || !address) {
      return res.send({ error: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "User already registered. Please login.",
      });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user: savedUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      success: false,
      message: "Registration error",
      error: err,
    });
  }
};

// User Login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    const isPasswordMatch = await comparePassword(password, user.password);

    if (!isPasswordMatch) {
      return res.status(200).send({
        success: false,
        message: "Incorrect password",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).send({
      success: true,
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      success: false,
      message: "Login error",
      error: err,
    });
  }
};

// Test Route
export const testRoute = (req, res) => {
  try {
    res.send("Protected route accessed successfully");
  } catch (err) {
    console.error(err);
    res.send({ error: err });
  }
};
