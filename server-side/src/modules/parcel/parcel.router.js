import { Router } from "express";
import { systemRoles } from "../../utils/constants.js";
import * as parcelController from "./controllers/parcel.controller.js"
import handleAuth from "../../../middlewares/handleAuth.js";
import handleUserRole from "../../../middlewares/handleUserRole.js";

const router = Router();

router.get("/", parcelController.getAllParcels);
router.get("/get-all-user-assigned-parcels", handleAuth, handleUserRole([systemRoles.BIKER, systemRoles.USER]), parcelController.getAllUserAssignedParcels);
router.get("/get-statuses", parcelController.getAllStatuses);
router.post('/create', handleAuth, handleUserRole([systemRoles.USER]), parcelController.addParcel);
router.put('/assign-to/:parcelId', handleAuth, handleUserRole([systemRoles.BIKER]), parcelController.assignParcel);
router.patch('/update-parcel-status/:parcelId', handleAuth, handleUserRole([systemRoles.BIKER]), parcelController.updateParcelStatus);


export default router;