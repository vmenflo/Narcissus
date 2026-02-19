import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Peliculas from "./pages/Peliculas";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/peliculas" element={<Peliculas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
