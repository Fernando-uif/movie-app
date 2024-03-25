"use client";

import { useEffect, useState } from "react";
import { Movie } from "@prisma/client";

import CardMovieItem from "./CardMovieItem";
import cardMovieStyle from "@/sass/components/card-movie/card_movie.module.scss";
import { getTrendingMovies } from "@/helpers/movies/trending/getTrendingMovies";

export const CardMovie = ({ title }: { title: string }) => {
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
    <div className={`${cardMovieStyle["cardMovie"]}`}>
      <h2 className={`${cardMovieStyle["cardMovie__title"]}`}>{title}</h2>
      <div className={`${cardMovieStyle["cardMovie__wrapperMovies"]}`}>
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
