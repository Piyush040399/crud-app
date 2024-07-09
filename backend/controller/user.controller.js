import { user as User } from "../models/user.model.js";

const addUser = async (req, res) => {
  try {
    const { username, email, age } = req.body;
    const user = await User.create({
      username: username,
      email: email,
      age: age,
    });
    res
      .status(201)
      .json({ message: "user created successfully !", data: user });
  } catch (error) {
    res.status(400).json({ message: "error occured :", error: error });
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "All user details !", users });
  } catch (error) {
    res.status(400).json({ message: "error occured :", error: error });
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById({ _id: id });
    res.status(200).json({ message: "user detail", user });
  } catch (error) {
    res.status(400).json({ message: "error occured :", error: error });
  }
};

const removeUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete({ _id: id });
    res
      .status(200)
      .json({ message: "user deleted successfully !", user });
  } catch (error) {
    res.status(400).json({ message: "error occured :", error: error });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = await User.findByIdAndUpdate({ _id: id }, req.body);
    res
      .status(200)
      .json({ message: "user updated successfully !", updatedData });
  } catch (error) {
    res.status(400).json({ message: "error occured :", error: error });
  }
};

export { addUser, getAllUser, getOneUser, removeUser, updateUser };
