const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function movieCardTemplate(movie) {
  const releaseYear = movie.release_date
    ? movie.release_date.slice(0, 4)
    : "N/A";

  const rating = movie.vote_average
    ? movie.vote_average.toFixed(1)
    : "N/A";

  const poster = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : "/images/no-poster.svg";

  return `
    <article class="movie-card">
      <img
        class="movie-poster"
        src="${poster}"
        alt="Poster for ${movie.title}"
        loading="lazy"
      />

      <div class="movie-info">
        <h2 class="movie-title">${movie.title}</h2>

        <div class="movie-meta">
          <span>${releaseYear}</span>
          <span>⭐ ${rating}</span>
        </div>

        <a
          class="details-button"
          href="/movie-details.html?id=${movie.id}"
        >
          View Details
        </a>

        <button
          class="watchlist-button"
          type="button"
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

  if (!movieList) {
    return;
  }

  movieList.innerHTML = movies
    .map(movieCardTemplate)
    .join("");
}