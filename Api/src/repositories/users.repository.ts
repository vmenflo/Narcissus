import { prisma } from "../prisma/client.js";
import type { Role } from "@prisma/client";

export async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}

export async function createUser(data: {
  email: string;
  passwordHash: string;
  role?: Role;
}) {
  return prisma.user.create({
    data: {
      email: data.email,
      passwordHash: data.passwordHash,
      role: data.role ?? "USER",
    },
  });
}