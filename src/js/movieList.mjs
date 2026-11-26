const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function movieCardTemplate(movie) {
  return `
    <article class="movie-card">
      <img
        src="${IMAGE_BASE_URL}${movie.poster_path}"
        alt="Poster for ${movie.title}"
        class="movie-poster"
        loading="lazy"
      />

      <div class="movie-info">
        <h2>${movie.title}</h2>

        <p>
          ${movie.release_date ? movie.release_date.slice(0, 4) : "Unknown year"}
        </p>

        <p>⭐ ${movie.vote_average.toFixed(1)}</p>

        <a href="/movie-details.html?id=${movie.id}">
          View Details
        </a>

        <button
          type="button"
          class="watchlist-button"
          data-movie-id="${movie.id}"
        >
          + Watchlist
        </button>
      </div>
    </article>
  `;
}

export function renderMovieList(movies) {
  const movieList = document.querySelector("#movie-list");

  if (!movieList) return;

  movieList.innerHTML = movies
    .map(movieCardTemplate)
    .join("");
}