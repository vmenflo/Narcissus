import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/home/Home";
import DetallePeliculaPage from "../pages/vistaPelicula/DetallePeliculaPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/peliculas/:id", element: <DetallePeliculaPage /> },
    ],
  },
]);