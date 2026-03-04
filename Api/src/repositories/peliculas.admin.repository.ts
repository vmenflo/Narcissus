import { prisma } from "../prisma/client.js";

export type PeliculaCreateInput = {
  titulo: string;
  descripcion: string;
  duracion: number;
  genero: string;
  anio: number;
  rating: number;
  sala: number;
  hora: string;
  imagenUrl: string;
  trailerUrl?: string | null;
};

export type PeliculaUpdateInput = Partial<PeliculaCreateInput>;

async function nextId() {
  const agg = await prisma.pelicula.aggregate({ _max: { id: true } });
  return (agg._max.id ?? 0) + 1;
}

export async function createPelicula(data: PeliculaCreateInput) {
  const id = await nextId();
  return prisma.pelicula.create({ data: { id, ...data } });
}

export async function updatePelicula(id: number, data: PeliculaUpdateInput) {
  return prisma.pelicula.update({ where: { id }, data });
}

export async function deletePelicula(id: number) {
  return prisma.pelicula.delete({ where: { id } });
}