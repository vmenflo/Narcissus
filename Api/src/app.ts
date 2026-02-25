import "dotenv/config";
import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import healthRoutes from "./routes/health.route.js";
import peliculasRoutes from "./routes/peliculas.route.js";
import noticiasRoutes from "./routes/noticias.route.js";
import { notFound } from "./middlewares/notFound.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import adminRoutes from "./routes/admin.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/peliculas", peliculasRoutes);
app.use("/api/noticias", noticiasRoutes);
app.use("/api/admin", adminRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;