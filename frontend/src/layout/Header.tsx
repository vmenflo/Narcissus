import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ background: "white", padding: 20 }}>
      <nav style={{ display: "flex", gap: 20 }}>
        <Link to="/" style={{ color: "#213140" }}>Home</Link>
        <Link to="/peliculas" style={{ color: "#213140" }}>Películas</Link>
      </nav>
    </header>
  );
}
