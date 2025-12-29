import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(Mongo_URL);
    console.log("connected to mongoDB successfully");
  } catch (error) {
    console.log(error, "error while connection to db");
  }
};
export default connectDB;
