import { PrismaClient } from '@prisma/client';

const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

const prerender = false;
const GET = async () => {
  const posts = await prisma.post.findMany();
  return new Response(JSON.stringify({ posts }));
};

export { GET, prerender };
