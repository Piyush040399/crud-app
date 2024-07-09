import express from "express";
import {
  addUser,
  getAllUser,
  getOneUser,
  removeUser,
  updateUser,
} from "../controller/user.controller.js";

const router = express.Router();

router.post("/create-user", addUser);
router.get("/users", getAllUser);
router.get("/user/:id", getOneUser);
router.post("/user/edit/:id", updateUser);
router.delete("/user/:id", removeUser);

export default router;
