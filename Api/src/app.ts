import express from "express";
import cors from "cors";

import healthRoutes from "./routes/health.route.js";
import cinesRoutes from "./routes/cines.route.js";
import peliculasRoutes from "./routes/peliculas.route.js";
import { notFound } from "./middlewares/notFound.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

// Middlewares base
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api", healthRoutes);
app.use("/api/cines", cinesRoutes);
app.use("/api/peliculas", peliculasRoutes);

// 404 (si no coincide nada)
app.use(notFound);

// Errores (si algo explota)
app.use(errorHandler);

export default app;
