import { getPeliculaById } from "../../services/peliculas.service";
import type { Pelicula } from "../../types/pelicula";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function DetallePeliculaPage() {
  
  const [pelicula, setPelicula] = useState<Pelicula | null>(null);  
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);


    getPeliculaById(id)
      .then(setPelicula)
      .catch((e: unknown) => {
        const msg = e instanceof Error ? e.message : "Error cargando la película";
        setError(msg);
        setPelicula(null);
      })
      .finally(()=> setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando ...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!pelicula) return <p>No se encontró la película.</p>

  return (
    <div>

      <h1>{pelicula.titulo}</h1>
      <p>FOTO</p>
      <p>{pelicula.genero}</p>
      <p>{pelicula.descripcion}</p>

      <Link to="/" style={{ display: "inline-block", marginBottom: 12 }}>
        ← Volver a cartelera
      </Link>
  
    </div>
  );
}
