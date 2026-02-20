import { apiGet } from "./api";
import type { Pelicula } from "../types/pelicula";

export function getPeliculas(): Promise<Pelicula[]> {
  return apiGet<Pelicula[]>("/api/peliculas");
}

export function getPeliculaById(id: string): Promise<Pelicula> {
  return apiGet<Pelicula>(`/api/peliculas/${id}`);
}