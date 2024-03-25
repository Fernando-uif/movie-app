import cardItemStyle from "@/sass/components/card-movie/card_movie_item.module.scss";
import Image from "next/image";
import Icon from "../../icons/Icon";
import { Movie} from "../../../interfaces/movie.interface";

const CardMovieItem = ({ }: Movie) => {
  return (
    <div className={`${cardItemStyle["cardItem"]}`}>
      <Icon
        name="favorite"
        className={`${cardItemStyle["cardItem__favorite"]}`}
      />
      <Image
        src={"/assets/thumbnails/112/regular/large.jpg"}
        width={300}
        height={150}
        alt="image.jpg"
        className={`${cardItemStyle["cardItem__img"]}`}
      />
      {/* aboslute */}

      <div className={`${cardItemStyle["cardItem__info"]}`}>
        <span
          className={`${cardItemStyle["cardItem__details"]} ${cardItemStyle["cardItem__details-item"]}`}
        >
          2019
        </span>
        <span
          className={`${cardItemStyle["cardItem__details"]} ${cardItemStyle["cardItem__details-item"]}`}
        >
          <Icon
            name="textMovie"
            className={`${cardItemStyle["cardItem__details__icon"]}`}
          />
          Movie
        </span>
        <span className={`${cardItemStyle["cardItem__details"]}`}>PG</span>
      </div>
      <div className={`${cardItemStyle["cardItem__name"]}`}>Beyond Earth</div>
    </div>
  );
};

export default CardMovieItem;
