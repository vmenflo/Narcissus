import * as repo from "../repositories/cines.repository.js";

export function getCines(search?: string) {
  const cines = repo.findAll();

  const q = (search ?? "").trim().toLocaleLowerCase();
  if(!q) return cines;

  return cines.filter((p) => p.nombre.toLocaleLowerCase().includes(q));
}

export function getCineById(id: number) {
  return repo.findById(id);
}