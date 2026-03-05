import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import bcrypt from "bcryptjs";

import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "@prisma/client";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || "file:./dev.db",
});

const prisma = new PrismaClient({ adapter });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function readJson<T>(relativeFromApiRoot: string): T {
  // prisma/seed.ts -> api/
  const apiRoot = path.resolve(__dirname, "..");
  const full = path.join(apiRoot, relativeFromApiRoot);
  return JSON.parse(fs.readFileSync(full, "utf-8")) as T;
}

async function main() {
  const peliculas = readJson<any[]>("src/data/peliculas.json");
  const noticias = readJson<any[]>("src/data/noticias.json");

  for (const p of peliculas) {
    await prisma.pelicula.upsert({
      where: { id: p.id },
      update: {
        titulo: p.titulo,
        descripcion: p.descripcion,
        duracion: p.duracion,
        genero: p.genero,
        anio: p.anio,
        rating: p.rating,
        sala: p.sala,
        hora: p.hora,
        imagenUrl: p.imagenUrl,
        trailerUrl: p.trailerUrl ?? null,
      },
      create: {
        id: p.id,
        titulo: p.titulo,
        descripcion: p.descripcion,
        duracion: p.duracion,
        genero: p.genero,
        anio: p.anio,
        rating: p.rating,
        sala: p.sala,
        hora: p.hora,
        imagenUrl: p.imagenUrl,
        trailerUrl: p.trailerUrl ?? null,
      },
    });
  }

  for (const n of noticias) {
    await prisma.noticia.upsert({
      where: { id: n.id },
      update: {
        titulo: n.titulo,
        articulo: n.articulo,
        autor: n.autor,
        imagenUrl: n.imagenUrl,
      },
      create: {
        id: n.id,
        titulo: n.titulo,
        articulo: n.articulo,
        autor: n.autor,
        imagenUrl: n.imagenUrl,
      },
    });
  }

  const adminEmail = "admin@narcissus.local";
  const adminPass = "admin1234";

  const userEmail = "user@narcissus.local";
  const userPass = "user1234";

  const adminHash = await bcrypt.hash(adminPass, 10);
  const userHash = await bcrypt.hash(userPass, 10);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: { passwordHash: adminHash, role: "ADMIN" },
    create: { email: adminEmail, passwordHash: adminHash, role: "ADMIN" },
  });

  await prisma.user.upsert({
    where: { email: userEmail },
    update: { passwordHash: userHash, role: "USER" },
    create: { email: userEmail, passwordHash: userHash, role: "USER" },
  });

  console.log("Seed completado ✅");
  console.log("Users seed OK ✅");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });