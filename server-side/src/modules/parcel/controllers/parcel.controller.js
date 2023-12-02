import mongoose from "mongoose";

import { asyncHandler, SuccessResponse } from "../../../utils/handlers.js";
import parcelModel from "../models/parcel.model.js";
import { parcelStatuses } from "../../../utils/constants.js";

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
  const { parcelName, pickupAddress, dropOffAddress } = req.body;
  if ([parcelName, pickupAddress, dropOffAddress].some((item) => !item)) {
    return next(new Error("All fields are required", { cause: 400 }));
  }
  const parcelObject = {
    createdBy: req.user._id,
    parcelName,
    pickupAddress,
    dropOffAddress,
  };
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

export const assignParcel = asyncHandler(async (req, res, next) => {
  const {parcelId} = req.params;
  const { pickupTime, dropOffTime } = req.body;
  if ([pickupTime, dropOffTime].some((item) => !item)) {
    return next(new Error("All fields are required", { cause: 400 }));
  }
  if (!mongoose.Types.ObjectId.isValid(parcelId)) {
    next(new Error("Invalid ObjectId", { cause: 400 }));
  }
  const parcel = await parcelModel.findById(parcelId); 
  if (!parcel) {
    return next(new Error("No parcel available with this id", { cause: 400 }));
  }
  if(parcel?.deliveredBy) {
    return next(new Error("Parcel already assigned", { cause: 400 }));
  }
  parcel.deliveredBy = req.user._id;
  parcel.pickupTime = pickupTime;
  parcel.dropOffTime = dropOffTime;
  parcel.parcelStatus = parcelStatuses.PICKED;
  const updatedParcel = await parcel.save();
  if (!updatedParcel) {
    return next(new Error("You can't update this resource", { cause: 500 }));
  }
  return SuccessResponse(
    res,
    { message: "Parcel picked successfully", statusCode: 230, updatedParcel },
    200
  );
}); 