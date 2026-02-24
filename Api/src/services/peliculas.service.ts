import * as repo from "../repositories/peliculas.repository.js";

export async function getPeliculas(search?: string) {
  const q = (search ?? "").trim();
  return repo.findAll(q);
}

export async function getPeliculaById(id: number) {
  return repo.findById(id);
}