export interface Movie {
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: Category;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export type Category = "movie" | "tv-series";

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
