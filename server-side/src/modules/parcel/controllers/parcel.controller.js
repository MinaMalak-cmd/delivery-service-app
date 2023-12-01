import  mongoose from 'mongoose';

import { asyncHandler, SuccessResponse } from "../../../utils/handlers.js";
import userModel from "../../user/models/user.model.js";
import parcelModel from "../models/parcel.model.js";

export const getAllParcels = asyncHandler(async (req, res, next) => {
  const parcels = await parcelModel.find();
  return parcels
    ? SuccessResponse(
        res,
        {
          message: "parcels retrieved successfully",
          statusCode: 200,
          parcels,
        },
        200
      )
    : next(new Error("Can't get All parcels", { cause: 400 }));
});

export const addParcel = asyncHandler(async (req, res, next) => {
  const { createdBy, parcelName, pickupAddress, dropOffAddress } = req.body;
  if (!mongoose.Types.ObjectId.isValid(createdBy)) {
    return next(new Error("'Invalid ObjectId", { cause: 400 }));
  }
  if([parcelName, pickupAddress, dropOffAddress].some(item => !item)) {
    return next(new Error("All fields are required", { cause: 400 }));
  }
  const user = await userModel.findById(createdBy);
  if (!user) {
    return next(new Error("User doesn't exist", { cause: 400 }));
  }
  const parcelObject = {createdBy,
    parcelName,
    pickupAddress,
    dropOffAddress}
  const parcel = await parcelModel.create(parcelObject);
  if (!parcel) {
    return next(new Error("You can't add this resource", { cause: 500 }));
  }
  return SuccessResponse(
    res,
    { message: "Parcel created successfully", statusCode: 230, parcel },
    201
  );
});