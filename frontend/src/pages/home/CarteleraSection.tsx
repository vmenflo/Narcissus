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

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {peliculas.map((p) => (
          <PeliculaCard key={p.id} pelicula={p} />
        ))}
      </div>
    </section>
  );
}