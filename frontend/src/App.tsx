import { useEffect, useState } from "react";

export default function App() {

  type Pelicula = {
    id: number;
    titulo: string;
    descripcion: string;
    genero: string;
  };
  
  const [peliculas, setPeliculas] = useState<Pelicula[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/peliculas")
      .then((res) => res.json())
      .then((data) => setPeliculas(data))
      .catch((err) => console.error("Error fetch:", err));
  }, []);

  return (
    <div
    style={{
      display: "flex",
      gap: 20,
      flexWrap: "wrap",
      marginTop: 20
    }}
  >
    {peliculas.map((p) => (
      <div
        key={p.id}
        style={{
          width: 400,
          border: "1px solid #ddd",
          borderRadius: 12,
          padding: 16,
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          backgroundColor: "white"
        }}
      >
        <h3>{p.titulo}</h3>
        <p style={{ fontSize: 14 }}>{p.descripcion}</p>
        <p><strong>{p.genero}</strong></p>
      </div>
    ))}
  </div>
  
);

}
