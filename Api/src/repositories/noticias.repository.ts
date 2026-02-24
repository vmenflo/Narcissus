import { prisma } from "../db/prisma.js";

export async function findAll(search?: string) {
  return prisma.noticia.findMany({
    where: search
      ? { titulo: { contains: search, mode: "insensitive" } }
      : undefined,
    orderBy: { id: "asc" },
  });
}

export async function findById(id: number) {
  return prisma.noticia.findUnique({ where: { id } });
}