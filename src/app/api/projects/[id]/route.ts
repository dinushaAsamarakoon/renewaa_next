import prisma from "../../../../../prisma";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const project = await prisma.project.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        contents: true,
        imageUrls: true,
      },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ project });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while fetching the project" },
      { status: 500 }
    );
  }
}
