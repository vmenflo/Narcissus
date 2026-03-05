import { prisma } from "../prisma/client.js";

export async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}