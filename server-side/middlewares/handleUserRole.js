import { asyncHandler } from "../src/utils/handlers.js";

const handleUserRole = (accessRoles) => {
  return asyncHandler(async (req, res, next) => {
    if (!accessRoles.includes(req.user.role)) {
      return next(new Error("Un Authorized to access this endpoint", { cause: 401 }));
    }
    next();
  });
};

export default handleUserRole;
