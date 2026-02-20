import noticias from "../data/noticias.json" assert { type: "json" };

export function findAll() {
  return noticias;
}

export function findById(id: number) {
  return noticias.find((p) => p.id === id) ?? null;
}