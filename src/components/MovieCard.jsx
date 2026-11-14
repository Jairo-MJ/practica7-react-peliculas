import { Link } from "react-router-dom";
import { getMovieImage } from "../services/tmdb";

function MovieCard({ movie }) {
  const poster = getMovieImage(movie.poster_path);
  const year = movie.release_date
    ? movie.release_date.substring(0, 4)
    : "Año desconocido";

  return (
    <Link to={`/movies/${movie.id}`} className="movie-card">
      <div className="movie-poster">
        {poster ? (
          <img src={poster} alt={`Póster de ${movie.title}`} />
        ) : (
          <div className="no-poster">Sin póster disponible</div>
        )}
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <div className="movie-meta">
          <span>{year}</span>
          <span>★ {movie.vote_average?.toFixed(1) ?? "N/A"}</span>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;