import React from "react";
import CardMovieItem from "./CardMovieItem";

interface Props {
  title: string;
}

export const CardMovie = ({ title }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <CardMovieItem />
    </div>
  );
};
