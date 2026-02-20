import type { Noticia } from "../../types/noticia";
import { Link } from "react-router-dom";

type Props = {
  noticias: Noticia[];
};

export default function vistaNoticias({ noticias }: Props) {
  return (
    <div>


      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {noticias.map((n) => (
            <Link to = {`/noticias/${n.id}`}>
                <p>{n.titulo}</p>
                <img style={{width:300, height:150}} src={n.imagenUrl} alt="" />
            </Link>
   
        ))}
      </div>
    </div>
  );
}