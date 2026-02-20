import { getPeliculaById } from "../../services/peliculas.service";
import type { Pelicula } from "../../types/pelicula";
import { Link, useLoaderData } from "react-router-dom";

export async function loader({ params }: { params: any }) {
  const id = params.id;

  if (!id) {
    throw new Response("Falta el id", { status: 400 });
  }

  try {
    const pelicula = getPeliculaById(id);
    return pelicula;
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Error cargando la película";
    throw new Response(msg, { status: 500 });
  }
}

export default function DetallePeliculaPage() {
  const pelicula = useLoaderData() as Pelicula;

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