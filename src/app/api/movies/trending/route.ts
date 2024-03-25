import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const trendingMovies = await prisma.movie.findMany({
    where: {
      isTrending: true,
    },
  });

  return NextResponse.json(trendingMovies);
}
