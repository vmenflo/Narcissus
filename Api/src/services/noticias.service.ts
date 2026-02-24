import * as repo from "../repositories/noticias.repository.js";

export async function getNoticias(search?: string) {
  const q = (search ?? "").trim();
  return repo.findAll(q);
}

export async function getNoticiaById(id: number) {
  return repo.findById(id);
}