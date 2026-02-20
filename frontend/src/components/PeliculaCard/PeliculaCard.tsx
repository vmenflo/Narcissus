import { Link } from "react-router-dom";
import type { Pelicula } from "../../types/pelicula";

export default function PeliculaCard({ pelicula }: { pelicula: Pelicula }) {
  return (
    <Link
      to={`/peliculas/${pelicula.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          padding: 16,
          width: 250,
          borderRadius: 10,
          border: "1px solid #2a3242",
          background: "#151a22",
          cursor: "pointer",
        }}
      >
        <p style={{ margin: 0, opacity: 0.7 }}>FOTO</p>
        <p style={{ margin: "10px 0 6px 0", fontWeight: 600 }}>
          {pelicula.titulo}
        </p>
        {pelicula.sinopsis && (
          <p style={{ margin: 0, opacity: 0.85, fontSize: 13, lineHeight: 1.4 }}>
            {pelicula.sinopsis}
          </p>
        )}
      </div>
    </Link>
  );
}