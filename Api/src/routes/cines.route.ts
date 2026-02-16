import { Router } from "express";
import * as controller from "../controllers/cines.controller.js";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);

export default router;