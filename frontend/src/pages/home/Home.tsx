import { useLoaderData } from "react-router-dom";
import { getPeliculas } from "../../services/peliculas.service";
import type { Pelicula } from "../../types/pelicula";
import CarteleraSection from "./CarteleraSection";

export async function loader() {
  return getPeliculas();
}

export default function Home() {
  const peliculas = useLoaderData() as Pelicula[];

  return (
    <div>
      <h1>Bienvenido a Narcissus</h1>

      <CarteleraSection peliculas={peliculas} />

      <h3>Noticias</h3>
      <hr />
    </div>
  );
}