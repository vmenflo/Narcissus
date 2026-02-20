import * as repo from "../repositories/noticias.repository.ts";

export function getNoticias(search?: string) {
  const noticias = repo.findAll();

  const q = (search ?? "").trim().toLowerCase();
  if (!q) return noticias;

  return noticias.filter((p) => p.titulo.toLowerCase().includes(q));
}

export function getNoticiaById(id: number) {
  return repo.findById(id);
}
