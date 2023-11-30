export const asyncHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(async (error) => {
      return next(new Error(error));
    });
  };
};

export const globalErrorHandling = (error, req, res, next) => {
  error.statusCode = error.statusCode || error?.cause || 400;
  if (req.validationErrors) {
    error.validationErrors = [...req.validationErrors];
    error.message = "Validation error";
  }
  if (process.env.NODE_ENV !== "production") {
    sendErrorDev(error, res);
  } else {
    sendErrorProd(error, res);
  }
};

const sendErrorDev = (error, res) => {
  if (error.validationErrors) {
    return res.status(error.statusCode).json({
      statusCode: error.statusCode,
      message: error.message,
      stack: error.stack,
      errors: error.validationErrors,
    });
  }
  return res.status(error.statusCode).json({
    statusCode: error.statusCode,
    message: error.message,
    stack: error.stack,
  });
};

const sendErrorProd = (error, res) => {
  if (error.validationErrors) {
    return res.status(error.statusCode).json({
      statusCode: error.statusCode,
      message: error.message,
      errors: error.validationErrors,
    });
  }
  return res.status(error.statusCode).json({
    statusCode: error.statusCode,
    message: error.message,
  });
};

export const SuccessResponse = (res, data, statusCode) => {
  return res.status(statusCode).json(data);
};
