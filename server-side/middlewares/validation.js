import Joi from "joi";
import { Types } from "mongoose";

const dataMethods = ["body", "params", "query", "headers", "file", "files"];

const validationObjectId = (value, helper) => {
  return Types.ObjectId.isValid(value) ? true : helper.message("Invalid ObjectId format");
};

export const validation = (JoiSchema) => {
  return (req, res, next) => {
    const validationErr = [];
    dataMethods.forEach((key) => {
      if (JoiSchema[key]) {
        const validationResult = JoiSchema[key].validate(req[key], {
          abortEarly: false,
        });
        if (validationResult.error) {
          validationErr.push(validationResult.error.details);
        }
      }
    });
    if (validationErr.length > 0) {
      req.validationErrors = validationErr;
      return next(new Error('', { cause: 404 }))

    }
    return next();
  };
};

export const generalFields = {
  email: Joi.string()
    .email({ tlds: { allow: ["com", "net", "org"] } })
    .required(),
  password: Joi.string()
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
    .messages({
      "string.pattern.base": "Password regex fail",
    })
    .required(),
  _id : Joi.string().custom(validationObjectId),
  string : Joi.string().min(2).max(100)
};
