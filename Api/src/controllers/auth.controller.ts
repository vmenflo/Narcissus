import type { Request, Response, NextFunction } from "express";
import * as service from "../services/auth.service.js";

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body as { email: string; password: string };

    const result = await service.login(email, password);
    return res.json(result);
  } catch (err) {
    next(err);
  }
}

export async function register(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body as { email: string; password: string };

    const result = await service.register(email, password);
    return res.status(201).json(result);
  } catch (err) {
    next(err);
  }
}