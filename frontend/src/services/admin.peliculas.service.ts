import { apiDelete, apiGet, apiPost, apiPut } from "./api";
import type { Pelicula } from "../types/pelicula";

export type PeliculaFormData = {
  titulo: string;
  descripcion: string;
  duracion: number;
  genero: string;
  anio: number;
  rating: number;
  sala: number;
  hora: string;
  imagenUrl: string;
  trailerUrl?: string;
};

export function getAdminPeliculas(): Promise<Pelicula[]> {
  return apiGet<Pelicula[]>("/api/peliculas");
}

export function createPelicula(data: PeliculaFormData): Promise<Pelicula> {
  return apiPost<Pelicula>("/api/admin/peliculas", data);
}

export function updatePelicula(id: number, data: Partial<PeliculaFormData>): Promise<Pelicula> {
  return apiPut<Pelicula>(`/api/admin/peliculas/${id}`, data);
}

export function deletePelicula(id: number): Promise<void> {
  return apiDelete<void>(`/api/admin/peliculas/${id}`);
}