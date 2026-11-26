import { loadHeaderFooter } from "./utils.mjs";
import { getTrendingMovies } from "./api.mjs";
import { renderMovieList } from "./movieList.mjs";

loadHeaderFooter();

async function loadTrendingMovies() {
  try {
    const data = await getTrendingMovies();

    console.log("Trending movies:", data);

    renderMovieList(data.results);
  } catch (error) {
    console.error("Unable to load trending movies:", error);
  }
}

loadTrendingMovies();