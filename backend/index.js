import dotenv from "dotenv";
import express from "express";
import dbConnect from "./db/dbConnection.js";
import userRouter from "./routes/user.route.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter);

dbConnect().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server running on port", process.env.PORT);
  });
});
