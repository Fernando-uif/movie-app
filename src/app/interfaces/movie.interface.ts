import { JsonValue } from "@prisma/client/runtime/library";

export interface Movie {
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}



export interface Thumbnail {
  trending: Trending;
  regular: Regular;
}

export interface Regular {
  small: string;
  medium: string;
  large: string;
}

export interface Trending {
  small: string;
  large: string;
}
