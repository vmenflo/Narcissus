import { Link } from "react-router-dom";
import type { Pelicula } from "../../types/pelicula";

export default function PeliculaCard({ pelicula }: { pelicula: Pelicula }) {
  return (
    <Link to={`/peliculas/${pelicula.id}`}>
      <div className='contenedor-peliculas-card' >
        <img className="card-img" src={pelicula.imagenUrl} alt={`portada-${pelicula.titulo}`} />
        <p  style={{textTransform:"uppercase"}}>
          {pelicula.titulo}
        </p>
        <p style={{ color: "#E6EB6C"}}>{`Sala ${pelicula.sala}`}</p>
        <p>Hora: {pelicula.hora}</p>
      </div>
    </Link>
  );
}