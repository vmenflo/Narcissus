import type { Pelicula } from "../../types/pelicula";
import {Link} from "react-router-dom";

type Props = {
  pelicula: Pelicula;
};

function toEmbedUrl(url: string): string {
    // YouTube: watch?v=ID o youtu.be/ID
    const ytWatch = url.match(/v=([^&]+)/);
    if (ytWatch?.[1]) return `https://www.youtube.com/embed/${ytWatch[1]}`;
  
    const ytShort = url.match(/youtu\.be\/([^?]+)/);
    if (ytShort?.[1]) return `https://www.youtube.com/embed/${ytShort[1]}`;
  
    // Si ya viene como embed o es otra plataforma que ya es embebible, lo devolvemos tal cual
    return url;
  }

export default function DetallePeliculaPage({pelicula}: Props){

    return(
        <div className="contenedor-pelicula-detalle">

        <div className="detalle-trailer-wrapper">
            {pelicula.trailerUrl ? (
            <iframe
                className="detalle-trailer"
                src={toEmbedUrl(pelicula.trailerUrl)}
                title={`Tráiler de ${pelicula.titulo}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            ) : (
            <div className="detalle-trailer-placeholder">
                Tráiler no disponible
            </div>
            )}
        </div>

        <div className="detalle-info">
            <h1>{pelicula.titulo}</h1>
            <p className="detalle-genero">{pelicula.genero}</p>
            <p className="detalle-descripcion">{pelicula.descripcion}</p>

            <div className="detalle-meta">
            <span>{pelicula.anio}</span>
            <span>{pelicula.duracion} min</span>
            <span>⭐ {pelicula.rating}</span>
            </div>

            <div className="detalle-sesion">
            Sala {pelicula.sala} · {pelicula.hora}
            </div>
        </div>
        </div>
    )
}