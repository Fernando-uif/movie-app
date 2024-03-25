import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Category } from "@/app/interfaces/movie.interface";

interface SegmentsProps {
  params: {
    category: Category;
  };
}
const categories = ["movie", "tv-series"];
export async function GET(request: Request, segments: SegmentsProps) {
  const category = segments.params.category.toLocaleLowerCase();

  if (!categories.includes(category)) {
    return NextResponse.json(
      {
        message: `Bad request`,
      },
      { status: 404 }
    );
  }
  const categorieMovie = await prisma.movie.findMany({
    where: {
      category: category,
    },
  });

  return NextResponse.json(categorieMovie);
}
