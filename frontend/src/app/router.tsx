import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage, { loader as homeLoader} from "../pages/home/Home";
import DetallePeliculaPage, { loader as detallePeliculaLoader} from "../pages/vistaPelicula/DetallePeliculaPage";
import RouteError from "../pages/errors/RouteError";


export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <RouteError />,
    children: [
      { path: "/", element: <HomePage /> , loader: homeLoader},
      { path: "/peliculas/:id", element: <DetallePeliculaPage/>, loader: detallePeliculaLoader },
    ],
  },
]);