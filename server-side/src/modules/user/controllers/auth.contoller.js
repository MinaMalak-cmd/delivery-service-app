import jwt from "jsonwebtoken";
import { asyncHandler, SuccessResponse } from "../../../utils/handlers.js";
import userModel from "../models/user.model.js";

export const login = asyncHandler(async (req, res, next) => {
    const { userName, password } = req.body;
    const user = await userModel.findOne({
      userName,
      password
    }).select("userName role");
    if (!user) {
      return next(new Error("Either Email or Password is wrong", { cause: 404 }));
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.TOKEN_SIGNATURE, {
      expiresIn: "3d",
    });
    // const refreshToken = jwt.sign({ id: user._id, role: user.role }, process.env.TOKEN_SIGNATURE, {
    //   expiresIn: "30d",
    // });
    return SuccessResponse(
      res,
      {
        message: `login success`,
        accessToken: token,
        // refreshToken: refreshToken,
        user
      },
      200
    );
  });

  export const getAllUsers = asyncHandler(async (req, res, next) => {
   const users = await userModel.find();
    return SuccessResponse(
      res,
      {
        users
      },
      200
    );
  });