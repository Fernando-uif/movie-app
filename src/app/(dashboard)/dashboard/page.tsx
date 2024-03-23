import Search from "@/components/Search/Search";
import { CardMovie } from "@/components/movie/card-movie/CardMovie";
import React from "react";

const page = () => {
  return (
    <>
      <Search />
      <CardMovie title="Trending"/>
    </>
  );
};

export default page;
