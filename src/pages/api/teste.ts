import type { APIRoute } from 'astro'
import prisma from '../../lib/prisma'

export const prerender = true;

export const GET: APIRoute = async () => {
  const users = await prisma.user.findMany();
  return new Response(JSON.stringify({ users }));
}