import mongoose from "mongoose";
import seedDB from "./seeders/seedUsers.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URL);
    seedDB();
    console.log("🚀DB Connected .........");
    return connection;
  } catch (error) {
    console.log("🚀 ~ file: connection.js:6 ~.catch ~ error:", error);
  }
};
export default connectDB;
