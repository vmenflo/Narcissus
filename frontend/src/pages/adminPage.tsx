import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import type { Pelicula } from "../types/pelicula";
import {
  getAdminPeliculas,
  createPelicula,
  updatePelicula,
  deletePelicula,
  type PeliculaFormData,
} from "../services/admin.peliculas.service";

const initialForm: PeliculaFormData = {
  titulo: "",
  descripcion: "",
  duracion: 120,
  genero: "",
  anio: new Date().getFullYear(),
  rating: 7,
  sala: 1,
  hora: "20:00",
  imagenUrl: "",
  trailerUrl: "",
};

export default function AdminPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
  const [form, setForm] = useState<PeliculaFormData>(initialForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadPeliculas();
  }, []);

  async function loadPeliculas() {
    try {
      setLoading(true);
      setError("");
      const data = await getAdminPeliculas();
      setPeliculas(data);
    } catch (err: any) {
      setError(err.message || "No se pudieron cargar las películas");
    } finally {
      setLoading(false);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    const numericFields = ["duracion", "anio", "rating", "sala"];

    setForm((prev) => ({
      ...prev,
      [name]: numericFields.includes(name) ? Number(value) : value,
    }));
  }

  function handleEdit(pelicula: Pelicula) {
    setEditingId(pelicula.id);
    setForm({
      titulo: pelicula.titulo,
      descripcion: pelicula.descripcion,
      duracion: pelicula.duracion,
      genero: pelicula.genero,
      anio: pelicula.anio,
      rating: pelicula.rating,
      sala: pelicula.sala,
      hora: pelicula.hora,
      imagenUrl: pelicula.imagenUrl || "",
      trailerUrl: pelicula.trailerUrl || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetForm() {
    setEditingId(null);
    setForm(initialForm);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setSaving(true);
      setError("");

      const payload = {
        ...form,
        trailerUrl: form.trailerUrl?.trim() ? form.trailerUrl : null,
      };

      if (editingId) {
        const updated = await updatePelicula(editingId, payload);
        setPeliculas((prev) =>
          prev.map((p) => (p.id === editingId ? updated : p))
        );
      } else {
        const created = await createPelicula(payload);
        setPeliculas((prev) => [...prev, created]);
      }

      resetForm();
    } catch (err: any) {
      setError(err.message || "No se pudo guardar la película");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: number) {
    const confirmed = window.confirm("¿Seguro que quieres borrar esta película?");
    if (!confirmed) return;

    try {
      setError("");
      await deletePelicula(id);
      setPeliculas((prev) => prev.filter((p) => p.id !== id));
      if (editingId === id) resetForm();
    } catch (err: any) {
      setError(err.message || "No se pudo borrar la película");
    }
  }

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Panel admin</h1>
      <p>Email: {user?.email}</p>
      <p>Rol: {user?.role}</p>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button onClick={handleLogout}>Cerrar sesión</button>
        {editingId && <button onClick={resetForm}>Cancelar edición</button>}
      </div>

      <section style={{ marginBottom: "2rem" }}>
        <h2>{editingId ? "Editar película" : "Crear película"}</h2>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            gap: "0.75rem",
            maxWidth: "700px",
          }}
        >
          <input name="titulo" placeholder="Título" value={form.titulo} onChange={handleChange} required />
          <textarea
            name="descripcion"
            placeholder="Descripción"
            value={form.descripcion}
            onChange={handleChange}
            required
          />
          <input name="genero" placeholder="Género" value={form.genero} onChange={handleChange} required />
          <input name="duracion" type="number" placeholder="Duración" value={form.duracion} onChange={handleChange} required />
          <input name="anio" type="number" placeholder="Año" value={form.anio} onChange={handleChange} required />
          <input name="rating" type="number" step="0.1" min="0" max="10" placeholder="Rating" value={form.rating} onChange={handleChange} required />
          <input name="sala" type="number" placeholder="Sala" value={form.sala} onChange={handleChange} required />
          <input name="hora" placeholder="Hora" value={form.hora} onChange={handleChange} required />
          <input name="imagenUrl" placeholder="URL imagen" value={form.imagenUrl} onChange={handleChange} required />
          <input name="trailerUrl" placeholder="URL trailer (opcional)" value={form.trailerUrl} onChange={handleChange} />

          <button type="submit" disabled={saving}>
            {saving ? "Guardando..." : editingId ? "Actualizar película" : "Crear película"}
          </button>
        </form>
      </section>

      <section>
        <h2>Listado de películas</h2>

        {error && <p>{error}</p>}
        {loading ? (
          <p>Cargando películas...</p>
        ) : peliculas.length === 0 ? (
          <p>No hay películas todavía.</p>
        ) : (
          <div style={{ display: "grid", gap: "1rem" }}>
            {peliculas.map((pelicula) => (
              <article
                key={pelicula.id}
                style={{
                  border: "1px solid #444",
                  borderRadius: "12px",
                  padding: "1rem",
                }}
              >
                <h3>{pelicula.titulo}</h3>
                <p>{pelicula.genero} · {pelicula.anio}</p>
                <p>Sala {pelicula.sala} · {pelicula.hora}</p>

                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <button onClick={() => handleEdit(pelicula)}>Editar</button>
                  <button onClick={() => handleDelete(pelicula.id)}>Borrar</button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}