import mongoose from "mongoose";

import { asyncHandler, SuccessResponse } from "../../../utils/handlers.js";
import parcelModel from "../models/parcel.model.js";
import { parcelStatuses, systemRoles } from "../../../utils/constants.js";

const fetchParcels = async (additionalConditions = {}) => {
  return await parcelModel
    .find(additionalConditions)
    .select("-__v")
    .populate([
      {
        path: "deliveredBy",
        select: "userName role",
      },
      {
        path: "createdBy",
        select: "userName role",
      },
    ]);
};
export const getAllParcels = asyncHandler(async (req, res, next) => {
  const parcels = await fetchParcels();
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

export const getAllUserAssignedParcels = asyncHandler(
  async (req, res, next) => {
    const parcels = await fetchParcels({
      $or: [{ deliveredBy: req.user._id }, { createdBy: req.user._id }],
    });

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
      : next(
          new Error("There are no parcels assigned to this user", {
            cause: 400,
          })
        );
  }
);

export const addParcel = asyncHandler(async (req, res, next) => {
  const { parcelName, pickupAddress, dropOffAddress } = req.body;
  const parcelObject = {
    createdBy: req.user._id,
    parcelName,
    pickupAddress,
    dropOffAddress,
  };
  const parcel = await parcelModel.create(parcelObject);
  return parcel
    ? SuccessResponse(
        res,
        { message: "Parcel created successfully", statusCode: 230, parcel },
        201
      )
    : next(new Error("You can't add this resource", { cause: 500 }));
});

export const assignParcel = asyncHandler(async (req, res, next) => {
  const { parcelId } = req.params;
  const { pickupTime, dropOffTime } = req.body;
  const parcel = await parcelModel.findById(parcelId);
  if (!parcel) {
    return next(new Error("No parcel available with this id", { cause: 400 }));
  }
  if (
    parcel?.deliveredBy &&
    req.user._id.toString() != parcel?.deliveredBy?.toString()
  ) {
    return next(new Error("You must be the delivery person", { cause: 400 }));
  }
  parcel.deliveredBy = req.user._id;
  parcel.pickupTime = pickupTime;
  parcel.dropOffTime = dropOffTime;
  parcel.parcelStatus = parcelStatuses.PICKED;
  const updatedParcel = await parcel.save();

  return updatedParcel
    ? SuccessResponse(
        res,
        {
          message: "Parcel updated successfully",
          statusCode: 230,
          updatedParcel,
        },
        200
      )
    : next(new Error("You can't update this resource", { cause: 500 }));
});

export const updateParcelStatus = asyncHandler(async (req, res, next) => {
  const { parcelId } = req.params;
  const { status } = req.body;
  
  const parcel = await parcelModel.findById(parcelId);
  if (!parcel) {
    return next(new Error("No parcel available with this id", { cause: 400 }));
  }
  if (req.user._id.toString() != parcel?.deliveredBy?.toString()) {
    return next(new Error("You must be the delivery person", { cause: 400 }));
  }
  parcel.parcelStatus = status;
  const updatedParcel = await parcel.save();

  return updatedParcel
    ? SuccessResponse(
        res,
        {
          message: "Parcel status updated successfully",
          statusCode: 230,
          updatedParcel,
        },
        200
      )
    : next(new Error("You can't update this resource", { cause: 500 }));
});

export const getAllStatuses = asyncHandler(async (req, res, next) => {
  const statuses = Object.values(parcelStatuses);
  return SuccessResponse(
    res,
    {
      message: "statuses retrieved successfully",
      statusCode: 200,
      statuses,
    },
    200
  );
});
