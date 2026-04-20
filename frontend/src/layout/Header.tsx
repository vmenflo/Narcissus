import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header-inner">
        
        {/* MENU */}
        <div className="menu-wrapper">
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {menuOpen && (
            <div className="menu-dropdown">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Películas
              </Link>
              <Link to="/noticias" onClick={() => setMenuOpen(false)}>
                Noticias
              </Link>
            </div>
          )}
        </div>

        {/* LOGO */}
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Nostromo" />
        </Link>

        {/* PERFIL */}
        <div className="perfil-wrapper">
          {!user ? (
            <Link to="/login" className="perfil-icon">
              <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.625 13.5417C15.625 18.7104 19.8312 22.9167 25 22.9167C30.1687 22.9167 34.375 18.7104 34.375 13.5417C34.375 8.37291 30.1687 4.16666 25 4.16666C19.8312 4.16666 15.625 8.37291 15.625 13.5417ZM41.6667 43.75H43.75V41.6667C43.75 33.6271 37.2062 27.0833 29.1667 27.0833H20.8333C12.7917 27.0833 6.25 33.6271 6.25 41.6667V43.75H41.6667Z" fill="#213140"/>
              </svg>

            </Link>
          ) : (
            <div className="perfil-logged">
              <span className="perfil-role">{user.role}</span>
              <button onClick={handleLogout}>Salir</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}