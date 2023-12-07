import { Router } from "express";

import * as authContoller from "./controllers/auth.contoller.js";

const router = Router();

router.post("/login", authContoller.login);

// this endpoint was created for testing pruposes
router.get("/get-all", authContoller.getAllUsers);

export default router;