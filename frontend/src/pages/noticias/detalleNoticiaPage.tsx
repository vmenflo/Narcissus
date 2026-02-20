import { getNoticiaById } from "../../services/noticias.services";
import type { Noticia } from "../../types/noticia";
import { useLoaderData } from "react-router-dom";
import NoticiaDetalleCard from "../../components/NoticiaCard/NoticiaDetalleCard"

export async function loader({ params }: { params: any }) {
  const id = params.id;

  if (!id) {
    throw new Response("Falta el id", { status: 400 });
  }

  try {
    const noticia = getNoticiaById(id);
    return noticia;
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Error cargando la noticia";
    throw new Response(msg, { status: 500 });
  }
}

export default function DetalleNoticiaPage() {
  const noticia = useLoaderData() as Noticia;

  return (
    <div>
        <NoticiaDetalleCard noticia={noticia}/>
    </div>
  );
}