import { useLoaderData } from "react-router-dom";
import { getPeliculas } from "../../services/peliculas.service";
import type { Pelicula } from "../../types/pelicula";
import CarteleraSection from "./CarteleraSection";
import NoticiasSection from "./NoticiasSection";


export async function loader() {
  return getPeliculas();
}

export default function Home() {
  const peliculas = useLoaderData() as Pelicula[];

  return (
    <div>
        <h1>Bienvenido a Narcissus</h1>

        <CarteleraSection peliculas={peliculas} />

        <NoticiasSection />
      
    </div>
  );
}