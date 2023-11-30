import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URL_CLOUD);
    console.log("🚀DB Connected .........");
    return connection;
  } catch (error) {
    console.log("🚀 ~ file: connection.js:6 ~.catch ~ err:", err);
  }
};
export default connectDB;
