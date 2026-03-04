import type { Request, Response, NextFunction } from "express";
import * as service from "../services/peliculas.admin.service.js";

export async function createPelicula(req: Request, res: Response, next: NextFunction) {
  try {
    const created = await service.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
}

export async function updatePelicula(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const updated = await service.update(id, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function deletePelicula(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    await service.remove(id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}