import { PrismaClient } from "@prisma/client";

let prisma;

if (!globalThis.prisma) {
  prisma = new PrismaClient();
  globalThis.prisma = prisma;
} else {
  prisma = globalThis.prisma;
}

export default prisma;
