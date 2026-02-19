import { useEffect, useState } from "react";

export default function Peliculas() {
  const [peliculas, setPeliculas] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/peliculas")
      .then(res => res.json())
      .then(data => setPeliculas(data));
  }, []);

  return (
    <div>
      <h1>Películas</h1>

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {peliculas.map((p) => (
          <div key={p.id} style={{
            border: "1px solid #ccc",
            padding: 16,
            width: 250,
            borderRadius: 8
          }}>
            <h3>{p.titulo}</h3>
            <p>{p.sinopsis}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
