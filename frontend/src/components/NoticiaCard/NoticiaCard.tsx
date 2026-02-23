import type { Noticia } from "../../types/noticia";
import { Link } from "react-router-dom";

type Props = {
  noticias: Noticia[];
};

export default function VistaNoticias({ noticias }: Props) {
  return (
    <div className="contenedor-noticias">
      {noticias.map((n) => (
        <Link
          key={n.id}
          className="contenedor-noticias-card"
          to={`/noticias/${n.id}`}
        >
          <p>{n.titulo}</p>
          <img className="noticias-img" src={n.imagenUrl} alt={n.titulo} />
        </Link>
      ))}
    </div>
  );
}