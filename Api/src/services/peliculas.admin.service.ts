import { AppError } from "../utils/AppError.js";
import * as repo from "../repositories/peliculas.admin.repository.js";

export async function create(data: repo.PeliculaCreateInput) {
  return repo.createPelicula(data);
}

export async function update(id: number, data: repo.PeliculaUpdateInput) {
  if (Number.isNaN(id)) throw new AppError(400, "ID_INVALID", "El id debe ser numérico");

  try {
    return await repo.updatePelicula(id, data);
  } catch {
    throw new AppError(404, "NOT_FOUND", "Película no encontrada");
  }
}

export async function remove(id: number) {
  if (Number.isNaN(id)) throw new AppError(400, "ID_INVALID", "El id debe ser numérico");

  try {
    return await repo.deletePelicula(id);
  } catch {
    throw new AppError(404, "NOT_FOUND", "Película no encontrada");
  }
}