import { getPeliculaById } from "../../services/peliculas.service";
import type { Pelicula } from "../../types/pelicula";
import { Link, useLoaderData } from "react-router-dom";
import DetallePelicula from "../../components/PeliculaCard/DetallePelicula"

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
      <DetallePelicula pelicula={pelicula} />

       <Link className="retroceder" to="/">
            <p>Volver atrás</p>
        </Link>
   </div>
  );
}