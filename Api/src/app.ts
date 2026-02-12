import express from "express";
import cors from "cors";

import healthRoutes from "./routes/health.routes.js";
import cinesRoutes from "./routes/cines.routes.js";
import peliculasRoutes from "./routes/peliculas.routes.js";
import { notFound } from "./middlewares/notFound.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

// Middlewares base
app.use(cors());
app.use(express.json());

// Rutas
app.use("/", healthRoutes);
app.use("/cines", cinesRoutes);
app.use("/peliculas", peliculasRoutes);

// 404 (si no coincide nada)
app.use(notFound);

// Errores (si algo explota)
app.use(errorHandler);

export default app;
