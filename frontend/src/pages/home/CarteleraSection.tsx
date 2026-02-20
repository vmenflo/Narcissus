import { useEffect, useState } from "react";
import { getPeliculas } from "../../services/peliculas.service";
import type { Pelicula } from "../../types/pelicula";
import PeliculaCard from "../../components/PeliculaCard/PeliculaCard";

export default function CarteleraSection() {
  const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getPeliculas()
      .then((data) => setPeliculas(data))
      .catch((e: unknown) => {
        const msg = e instanceof Error ? e.message : "Error cargando películas";
        setError(msg);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h3>Cartelera</h3>
      <hr />

      {loading && <p>Cargando cartelera...</p>}
      {error && <p style={{ opacity: 0.9 }}>Error: {error}</p>}

      {!loading && !error && (
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {peliculas.map((p) => (
            <PeliculaCard key={p.id} pelicula={p} />
          ))}
        </div>
      )}
    </section>
  );
}