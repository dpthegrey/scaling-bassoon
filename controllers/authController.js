import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new Error("Please provide all required fields");
  }

  const user = await User.create({ name, email, password });
  res.status(StatusCodes.CREATED).json({ user });

  res.send("register user");
};
const login = async (req, res) => {
  res.send("login user");
};
const updateUser = async (req, res) => {
  res.send("updateUser");
};

export { register, login, updateUser };
