import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <main>
      <h1>Panel admin</h1>
      <p>Email: {user?.email}</p>
      <p>Rol: {user?.role}</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </main>
  );
}