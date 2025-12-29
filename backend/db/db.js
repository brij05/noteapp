import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://brijrajsolanki4_db_user:Brijraj12121@cluster1.368vou6.mongodb.net/"
    );
    console.log("connected to mongoDB successfully");
  } catch (error) {
    console.log(error, "error while connection to db");
  }
};
export default connectDB;
