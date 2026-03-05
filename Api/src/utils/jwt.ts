import jwt from "jsonwebtoken";
import { AppError } from "./AppError.js";
import type { Role } from "@prisma/client";

export type JwtPayload = {
  sub: string;
  role: Role; // "USER" | "ADMIN"
};

export function signToken(payload: JwtPayload) {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new AppError(500, "ENV_MISSING", "Falta JWT_SECRET en .env");

  return jwt.sign(payload, secret, { expiresIn: "2h" });
}

export function verifyToken(token: string): JwtPayload {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new AppError(500, "ENV_MISSING", "Falta JWT_SECRET en .env");

  try {
    const decoded = jwt.verify(token, secret) as JwtPayload;

    if (!decoded?.sub || !decoded?.role) {
      throw new AppError(401, "TOKEN_INVALID", "Token inválido");
    }

    return decoded;
  } catch {
    throw new AppError(401, "TOKEN_INVALID", "Token inválido");
  }
}