import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ background: "white", padding: 20 }}>
      <nav style={{ display: "flex", gap: 20 }}>
        <Link to="/" style={{ color: "#213140" }}>Menu</Link>
        <Link to="/" style={{ color: "#213140" }}>LOGO</Link>
        <Link to="/perfil" style={{ color: "#213140" }}>Perfil</Link>
      </nav>
    </header>
  );
}
