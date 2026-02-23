import type { Noticia } from "../../types/noticia";
import {Link} from "react-router-dom";

type Props = {
  noticia: Noticia;
};

export default function detalleNoticia({noticia}: Props){
    return(
        <div className="contenedor-detalles-noticias">
            <h3>{noticia.titulo}</h3>
            <img className="noticias-img" src={noticia.imagenUrl} alt={noticia.titulo} />
            <p>{noticia.articulo}</p>
            <p>Realizado por {noticia.autor}</p>
            <Link className="retroceder" to="/noticias">
                Volver a noticias
            </Link>
        </div>
    )
}