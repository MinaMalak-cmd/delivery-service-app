import { Router } from "express";
import * as parcelController from "./controllers/parcel.controller.js"
import handleAuth from "../../../middlewares/handleAuth.js";

const router = Router();

router.get("/", parcelController.getAllParcels);
router.get("/get-all-user-assigned-parcels", handleAuth, parcelController.getAllUserAssignedParcels);
router.get("/get-all-biker-assigned-parcels", handleAuth, parcelController.getAllBikerAssignedParcels);
router.get("/get-statuses", parcelController.getAllStatuses);
router.post('/create', handleAuth, parcelController.addParcel);
router.put('/assign-to/:parcelId', handleAuth, parcelController.assignParcel);
router.patch('/update-parcel-status/:parcelId', handleAuth, parcelController.updateParcelStatus);


export default router;