import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, AUTH_COOKIE_NAME } from '../../../lib/auth/jwt';
import prisma from '../../../lib/db/prisma';
import { Role } from '@prisma/client';

export async function GET(req: NextRequest) {
  const token =
    req.cookies.get(AUTH_COOKIE_NAME)?.value ||
    req.headers.get('authorization')?.replace('Bearer ', '');

  if (!token) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  const payload = verifyToken(token);
  if (!payload) {
    return NextResponse.json({ success: false, message: 'Invalid token' }, { status: 401 });
  }

  if (payload.role === Role.ADMIN) {
    const projects = await prisma.project.findMany({
      include: {
        client: {
          include: { user: { select: { name: true, email: true } } },
        },
        milestones: { orderBy: { order: 'asc' } },
      },
      orderBy: { updatedAt: 'desc' },
    });
    return NextResponse.json({ success: true, data: { projects } });
  }

  // Client Isolation: Client sees only their projects
  const client = await prisma.client.findUnique({
    where: { userId: payload.id },
  });

  if (!client) {
    return NextResponse.json({ success: true, data: { projects: [] } });
  }

  const projects = await prisma.project.findMany({
    where: { clientId: client.id },
    include: {
      milestones: { orderBy: { order: 'asc' } },
      files: { where: { isPublic: true } },
    },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json({ success: true, data: { projects } });
}

export async function POST(req: NextRequest) {
  const token =
    req.cookies.get(AUTH_COOKIE_NAME)?.value ||
    req.headers.get('authorization')?.replace('Bearer ', '');

  const payload = token ? verifyToken(token) : null;
  if (!payload || payload.role !== Role.ADMIN) {
    return NextResponse.json({ success: false, message: 'Forbidden' }, { status: 403 });
  }

  try {
    const { clientId, title, description, category, budget } = await req.json();
    const slug = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now().toString(36)}`;

    const project = await prisma.project.create({
      data: {
        clientId,
        title,
        slug,
        description,
        category: category || 'Web Development',
        budget: budget ? parseFloat(budget) : 0,
        milestones: {
          create: [
            { title: 'Project Scope & Wireframing', order: 1, status: 'COMPLETED' },
            { title: 'UI/UX Visual Design', order: 2, status: 'IN_PROGRESS' },
            { title: 'Frontend & Backend Architecture', order: 3, status: 'PENDING' },
            { title: 'Quality Assurance & Testing', order: 4, status: 'PENDING' },
            { title: 'Production Deployment & Launch', order: 5, status: 'PENDING' },
          ],
        },
      },
      include: { milestones: true },
    });

    return NextResponse.json({ success: true, data: { project } }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to create project' }, { status: 500 });
  }
}
