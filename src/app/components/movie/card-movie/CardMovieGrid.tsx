"use client";

import { useEffect, useState } from "react";
import { Movie } from "@prisma/client";

import CardMovieItem from "./CardMovieItem";
import cardMovieGridStyle from "@/sass/components/card-movie/card_movie_grid.module.scss";
import { getTrendingMovies } from "@/helpers/movies/trending/getTrendingMovies";

export const CardMovieGrid = ({ title }: { title: string }) => {
  const [movies, setMovies] = useState<Movie[]>();
  useEffect(() => {
    getTrendingMovies().then((response) =>
      response.json().then((data) => {
        setMovies(data);
      })
    );
    return () => {};
  }, []);
  return (
    <div className={`${cardMovieGridStyle["cardMovieGrid"]}`}>
      <h2 className={`${cardMovieGridStyle["cardMovieGrid__title"]}`}>{title}</h2>
      <div className={`${cardMovieGridStyle["cardMovieGrid__wrapperMovies"]}`}>
        {movies?.map((movie: any) => {
          return (
            <>
              <CardMovieItem {...movie} />
            </>
          );
        })}
        {/*  */}
      </div>
    </div>
  );
};
