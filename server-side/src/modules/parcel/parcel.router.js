import { Router } from "express";

const router = Router();

router.get("/", (req,res,next) => res.json({"message":"Hello23"}));

export default router;