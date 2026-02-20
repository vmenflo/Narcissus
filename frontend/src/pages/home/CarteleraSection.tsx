import type { Pelicula } from "../../types/pelicula";
import PeliculaCard from "../../components/PeliculaCard/PeliculaCard";

type Props = {
  peliculas: Pelicula[];
};

export default function CarteleraSection({ peliculas }: Props) {
  return (
    <section>
      <h3>Cartelera</h3>
      <hr />

      <div className="seccion-cartelera">
        {peliculas.map((p) => (<PeliculaCard key={p.id} pelicula={p} />))}
      </div>
    </section>
  );
}