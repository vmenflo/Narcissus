import { z } from "zod";

export const peliculaCreateSchema = z.object({
  titulo: z.string().min(1),
  descripcion: z.string().min(1),
  duracion: z.number().int().positive(),
  genero: z.string().min(1),
  anio: z.number().int().min(1888).max(2100),
  rating: z.number().min(0).max(10),
  sala: z.number().int().positive(),
  hora: z.string().min(1),
  imagenUrl: z.string().url(),
  trailerUrl: z.string().url().optional().nullable(),
});

export const peliculaUpdateSchema = peliculaCreateSchema.partial();