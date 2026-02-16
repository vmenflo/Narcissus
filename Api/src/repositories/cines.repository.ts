import cines from "../data/cines.json" assert { type: "json" };

export function findAll() {
  return cines;
}

export function findById(id: number) {
  return cines.find((p) => p.id === id) ?? null;
}