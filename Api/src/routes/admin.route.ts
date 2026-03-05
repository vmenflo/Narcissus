import { Router } from "express";
import { auth } from "../middlewares/auth.js";
import { requireRole } from "../middlewares/requireRole.js";
import { validateBody } from "../middlewares/validateBody.js";

import { peliculaCreateSchema, peliculaUpdateSchema } from "../schemas/pelicula.schema.js";
import * as peliculasAdmin from "../controllers/peliculas.admin.controller.js";

const router = Router();

// Test auth
router.get("/me", auth, requireRole("ADMIN"), (req, res) => {
  res.json({ user: req.user });
});

// Películas admin
router.post(
  "/peliculas",
  auth,
  requireRole("ADMIN"),
  validateBody(peliculaCreateSchema),
  peliculasAdmin.createPelicula
);

router.put(
  "/peliculas/:id",
  auth,
  requireRole("ADMIN"),
  validateBody(peliculaUpdateSchema),
  peliculasAdmin.updatePelicula
);

router.delete("/peliculas/:id", auth, requireRole("ADMIN"), peliculasAdmin.deletePelicula);

export default router;