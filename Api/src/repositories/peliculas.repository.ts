import peliculas from "../data/peliculas.json" assert { type: "json" };

export function findAll() {
  return peliculas;
}

export function findById(id: number) {
  return peliculas.find((p) => p.id === id) ?? null;
}