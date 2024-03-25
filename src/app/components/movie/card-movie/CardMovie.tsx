import React from "react";
import CardMovieItem from "./CardMovieItem";
import cardMovieStyle from "@/sass/components/card-movie/card_movie.module.scss";
import { Movie } from "@prisma/client";

export const CardMovie = ({ title }: Movie) => {
  return (
    <div className={`${cardMovieStyle["cardMovie"]}`}>
      <h2 className={`${cardMovieStyle["cardMovie__title"]}`}>{title}</h2>
      <div className={`${cardMovieStyle["cardMovie__wrapperMovies"]}`}>
        {/* <CardMovieItem  /> */}
      </div>
    </div>
  );
};
