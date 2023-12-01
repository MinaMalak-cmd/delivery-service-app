import { Router } from "express";
import * as parcelController from "./controllers/parcel.controller.js"
const router = Router();

router.get("/", parcelController.getAllParcels);
router.post('/', parcelController.addParcel);


export default router;