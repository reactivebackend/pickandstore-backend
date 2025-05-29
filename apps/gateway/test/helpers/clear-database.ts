import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

export async function clearDatabase() {
  const tablenames = await prisma.$queryRaw<
    Array<{ tablename: string }>
  >`SELECT tablename FROM pg_tables WHERE schemaname='public'`;

  const tablesToTruncate = tablenames
    .map(({ tablename }) => `"public"."${tablename}"`)
    .join(', ');

  if (tablesToTruncate.length > 0) {
    await prisma.$executeRawUnsafe(
      `TRUNCATE ${tablesToTruncate} RESTART IDENTITY CASCADE;`,
    );
  }
}
