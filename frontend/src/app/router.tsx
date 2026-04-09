import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage, { loader as homeLoader } from "../pages/home/Home";
import DetallePeliculaPage, { loader as detallePeliculaLoader } from "../pages/vistaPelicula/DetallePeliculaPage";
import VistaNoticias, { loader as vistaNoticiasLoader } from "../pages/noticias/vistaNoticiasPage";
import DetalleNoticia, { loader as detalleNoticiaLoader } from "../pages/noticias/detalleNoticiaPage";
import LoginPage from "../pages/auth/loginPage";
import RegisterPage from "../pages/auth/registerPage";
import PerfilPage from "../pages/perfilPage";
import AdminPage from "../pages/adminPage";
import ProtectedRoute from "../components/ProtectedRoute";
import RouteError from "../pages/errors/RouteError";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <RouteError />,
    children: [
      { path: "/", element: <HomePage />, loader: homeLoader },
      { path: "/peliculas/:id", element: <DetallePeliculaPage />, loader: detallePeliculaLoader },
      { path: "/noticias", element: <VistaNoticias />, loader: vistaNoticiasLoader },
      { path: "/noticias/:id", element: <DetalleNoticia />, loader: detalleNoticiaLoader },

      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },

      {
        path: "/perfil",
        element: (
          <ProtectedRoute>
            <PerfilPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin",
        element: (
          <ProtectedRoute requireAdmin>
            <AdminPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);