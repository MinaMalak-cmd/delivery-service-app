import mongoose, { Schema, Types, model } from "mongoose";
import { systemRoles } from "../../../utils/constants.js";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "userName is required"],
      minLength: 2,
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type : String,
      default: systemRoles.USER,
      enum: [...Object.values(systemRoles)]
    }
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.models["User"] || model("User", userSchema);

export default userModel;
