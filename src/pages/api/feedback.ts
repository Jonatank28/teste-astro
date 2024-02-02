import type { APIRoute } from 'astro'
import prisma from '../../lib/prisma'

export const prerender = false; // Desabilita prerenderização

export const GET: APIRoute = async () => {
  const posts = await prisma.post.findMany();
  return new Response(JSON.stringify({ posts }));
}