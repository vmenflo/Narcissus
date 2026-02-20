import { isRouteErrorResponse, useRouteError, Link } from "react-router-dom";

export default function RouteError() {
  const err = useRouteError();

  if (isRouteErrorResponse(err)) {
    return (
      <div style={{ padding: 24 }}>
        <h2>Error {err.status}</h2>
        <p>{err.statusText}</p>
        <Link to="/">← Volver</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>Error inesperado</h2>
      <p>{(err as Error)?.message ?? "Unknown error"}</p>
      <Link to="/">← Volver</Link>
    </div>
  );
}