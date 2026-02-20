import { apiGet } from "./api";
import type { Noticia } from "../types/noticia";

export function getNoticias(): Promise<Noticia[]> {
  return apiGet<Noticia[]>("/api/noticias");
}

export function getNoticiaById(id: string): Promise<Noticia> {
  return apiGet<Noticia>(`/api/noticias/${id}`);
}