import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
interface SegmentsProps {
  params: {
    name: string;
  };
}
export async function GET(request: Request, segments: SegmentsProps) {
  let movieName = segments.params.name;
  movieName = movieName.split("-").join(" ");

  const movie = await prisma.movie.findFirst({
    where: {
      title: movieName,
    },
  });
  if (!movie) {
    return NextResponse.json(
      {
        message: "Not found",
      },
      {
        status: 404,
      }
    );
  }
  return NextResponse.json(movie);
}
