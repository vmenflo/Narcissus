import { useLoaderData } from "react-router-dom";
import { getNoticias } from "../../services/noticias.services";
import type {Noticia} from "../../types/noticia";
import VistaNoticias from "../../components/NoticiaCard/NoticiaCard";



export async function loader() {
    return getNoticias();
  }

export default function vistaNoticias(){

    const noticias = useLoaderData() as Noticia[];

    return(
        <div>
            <h3>Últimas Noticias</h3>
            <VistaNoticias noticias={noticias} />
        </div>
    )
}