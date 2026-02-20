const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`);

  if (!res.ok) {
    throw new Error(`API error ${res.status} al pedir ${path}`);
  }

  return res.json() as Promise<T>;
}