import mongoose, { Schema, Types, model } from "mongoose";
import { parcelStatuses } from "../../../utils/constants.js";

const parcelSchema = new Schema(
  {
    createdBy: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    parcelName: {
      type: String,
      required: [true, "parcelName is required"],
      minLength: 2,
    },
    pickupAddress: {
      type: String,
      minLength: 2,
    },
    dropOffAddress: {
      type: String,
      minLength: 2,
    },
    parcelStatus: {
      type: String,
      default: parcelStatuses.PENDING,
      enum: [...Object.values(parcelStatuses)],
    },
    pickupTime: {
      type: String,
    },
    dropOffTime: {
      type: String,
    },
    deliveredBy: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const parcelModel = mongoose.models["Parcel"] || model("Parcel", parcelSchema);

export default parcelModel;
