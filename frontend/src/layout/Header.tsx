import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ background: "#222", padding: 20 }}>
      <nav style={{ display: "flex", gap: 20 }}>
        <Link to="/" style={{ color: "white" }}>Home</Link>
        <Link to="/peliculas" style={{ color: "white" }}>Películas</Link>
      </nav>
    </header>
  );
}
