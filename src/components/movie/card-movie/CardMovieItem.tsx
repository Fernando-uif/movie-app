import cardItemStyle from "@/sass/components/card-movie/card_movie_item.module.scss";
import Image from "next/image";

interface Props {
  movies: Movies[];
}
interface Movies {
  img_url: string;
  info: string;
}

const CardMovieItem = () => {
  return (
    <figure>
      <Image
        src={"/assets/thumbnails/112/regular/large.jpg"}
        width={300}
        height={300}
        alt="image.jpg"
      />
    </figure>
  );
};

export default CardMovieItem;
