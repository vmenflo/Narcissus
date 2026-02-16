import type { Request, Response } from "express";
import * as service from "../services/peliculas.service.ts";

export function getAll(req: Request, res: Response) {
  const searchRaw = req.query.search;
  const search = typeof searchRaw === "string" ? searchRaw : undefined;

  const peliculas = service.getPeliculas(search);
  return res.json(peliculas);
}

export function getById(req: Request, res: Response) {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      code: "ID_INVALIDO",
      message: "ID debe ser número",
    });
  }

  const pelicula = service.getPeliculaById(id);

  if (!pelicula) {
    return res.status(404).json({
      code: "ID_NO_ENCONTRADO",
      message: "No existe",
    });
  }

  return res.json(pelicula);
}
