import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError.js";
import { verifyToken } from "../utils/jwt.js";

export type AuthUser = {
  sub: string;
  role: "admin";
};

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

export function auth(req: Request, _res: Response, next: NextFunction) {
  try {
    const header = req.headers.authorization;

    if (!header) {
      throw new AppError(401, "AUTH_REQUIRED", "Falta token (Authorization header)");
    }

    const [type, token] = header.split(" ");

    if (type !== "Bearer" || !token) {
      throw new AppError(401, "AUTH_REQUIRED", "Formato de token inválido (Bearer token)");
    }

    const payload = verifyToken(token);
    req.user = payload;

    next();
  } catch (err) {
    next(err);
  }
}