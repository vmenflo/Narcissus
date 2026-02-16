import * as repo from "../repositories/peliculas.repository.ts";

export function getPeliculas(search?: string) {
  const peliculas = repo.findAll();

  const q = (search ?? "").trim().toLowerCase();
  if (!q) return peliculas;

  return peliculas.filter((p) => p.titulo.toLowerCase().includes(q));
}

export function getPeliculaById(id: number) {
  return repo.findById(id);
}
