import { Router } from "express";

import * as authContoller from "./controllers/auth.contoller.js";

const router = Router();

router.post("/login", authContoller.login);

export default router;