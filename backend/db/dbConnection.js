import mongoose from "mongoose";
const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGO_URL}/project1`
    );
    console.log("Mongo Db connected successfully", connection.connection.host);
  } catch (error) {
    console.log("Mongo DB connection failed", error);
  }
};

export default dbConnect;
