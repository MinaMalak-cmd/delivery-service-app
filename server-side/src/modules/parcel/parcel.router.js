import { Router } from "express";
import * as parcelController from "./controllers/parcel.controller.js"
import handleAuth from "../../../middlewares/handleAuth.js";

const router = Router();

router.get("/", parcelController.getAllParcels);
router.post('/create', handleAuth, parcelController.addParcel);
router.put('/assign-to/:parcelId', handleAuth, parcelController.assignParcel);


export default router;