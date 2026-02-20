import type { Noticia } from "../../types/noticia";
import {Link} from "react-router-dom";

type Props = {
  noticia: Noticia;
};

export default function detalleNoticia({noticia}: Props){
    return(
        <div>
            <p>{noticia.titulo}</p>
            <p>{noticia.articulo}</p>
            <p>Realizado por {noticia.autor}</p>
            <Link to="/noticias">
                Volver a noticias
            </Link>
        </div>
    )
}