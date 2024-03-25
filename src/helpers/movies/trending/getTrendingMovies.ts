
export const getTrendingMovies = async () => {

    const trendingMovies = await fetch ('/api/movies/trending');
    console.log(trendingMovies,'trending');
    return trendingMovies;

}

