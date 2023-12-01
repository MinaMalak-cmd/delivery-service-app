import { Router } from "express";
import * as parcelController from "./controllers/parcel.controller.js"
import handleAuth from "../../../middlewares/handleAuth.js";

const router = Router();

router.get("/", parcelController.getAllParcels);
router.post('/', handleAuth, parcelController.addParcel);


export default router;