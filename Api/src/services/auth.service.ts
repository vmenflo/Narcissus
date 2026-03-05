import bcrypt from "bcryptjs";
import { AppError } from "../utils/AppError.js";
import { signToken } from "../utils/jwt.js";
import * as usersRepo from "../repositories/users.repository.js";

export async function login(email: string, password: string) {
  const user = await usersRepo.findByEmail(email);

  if (!user) {
    throw new AppError(401, "INVALID_CREDENTIALS", "Credenciales inválidas");
  }

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) {
    throw new AppError(401, "INVALID_CREDENTIALS", "Credenciales inválidas");
  }

  const token = signToken({ sub: String(user.id), role: user.role });

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  };
}