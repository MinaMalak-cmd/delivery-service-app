import { SuccessResponse } from "../../../utils/handlers.js";

export const retrieveParcels = (parcels, res) => {
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
      : next(new Error("There are no parcels assigned to this user", { cause: 400 }));
  }