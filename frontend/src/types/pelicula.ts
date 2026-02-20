export type Pelicula = {
  id: number;
  titulo: string;
  descripcion: string;
  duracion: number;
  genero: string;
  anio: number;
  rating: number;
  sala: number;
  hora: string;
  imagenUrl?: string;
  trailerUrl?: string;
};