import Image from "next/image";

import Icon from "../../icons/Icon";
import { toCapitalize } from "@/helpers/text/toCapitalize";

import { Movie } from "../../../interfaces/movie.interface";

import cardItemStyle from "@/sass/components/card-movie/card_movie_item.module.scss";

const CardMovieItem = ({ title, category, year, thumbnail, rating }: Movie) => {
  return (
    <div className={`${cardItemStyle["cardItem"]}`}>
      <Icon
        name="favorite"
        className={`${cardItemStyle["cardItem__favorite"]}`}
      />
      <Image
        src={`${thumbnail.trending.large}`}
        width={300}
        height={150}
        alt="image.jpg"
        className={`${cardItemStyle["cardItem__img"]}`}
      />

      <div className={`${cardItemStyle["cardItem__info"]}`}>
        <span
          className={`${cardItemStyle["cardItem__details"]} ${cardItemStyle["cardItem__details-item"]}`}
        >
          {year}
        </span>
        <span
          className={`${cardItemStyle["cardItem__details"]} ${cardItemStyle["cardItem__details-item"]}`}
        >
          <Icon
            name={`${category === "Movie" ? "textMovie" : "tv_series"}`}
            className={`${cardItemStyle["cardItem__details__icon"]}`}
          />
          {toCapitalize(category, "-")}
        </span>
        <span className={`${cardItemStyle["cardItem__details"]}`}>
          {rating}
        </span>
      </div>
      <div className={`${cardItemStyle["cardItem__name"]}`}>{title}</div>
    </div>
  );
};

export default CardMovieItem;
