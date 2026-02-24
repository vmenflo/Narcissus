import jwt from "jsonwebtoken";
import { AppError } from "./AppError.js";

type JwtPayload = {
  sub: string;
  role: "admin";
};

export function signAdminToken() {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new AppError(500, "ENV_MISSING", "Falta JWT_SECRET en .env");

  const payload: JwtPayload = { sub: "admin", role: "admin" };
  return jwt.sign(payload, secret, { expiresIn: "2h" });
}

export function verifyToken(token: string): JwtPayload {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new AppError(500, "ENV_MISSING", "Falta JWT_SECRET en .env");

  try {
    const decoded = jwt.verify(token, secret) as JwtPayload;
    if (!decoded?.role) throw new AppError(401, "TOKEN_INVALID", "Token inválido");
    return decoded;
  } catch {
    throw new AppError(401, "TOKEN_INVALID", "Token inválido");
  }
}