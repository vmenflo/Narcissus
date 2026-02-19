import { useEffect, useState } from "react";
import "../index.css";

export function Peliculas() {
  const [peliculas, setPeliculas] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/peliculas")
      .then(res => res.json())
      .then(data => setPeliculas(data));
  }, []);

  return (
    <div>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {peliculas.map((p) => (
          <div key={p.id} style={{
            padding: 16,
            width: 250,
            borderRadius: 8
          }}>
            <p>{p.titulo}</p>
            <p>{p.sinopsis}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default function Home() {
    return(
        <div>
            <h1>Bienvenido a Narcissus</h1>
        
            <h3>Películas</h3>
            <hr></hr>
            
            <Peliculas />
            <h3>Noticias</h3>
            <hr></hr>

        </div>

    );

  }