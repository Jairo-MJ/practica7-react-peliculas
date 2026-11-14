import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getMovieDetails,
  getMovieImage,
} from "../services/tmdb";

function MovieDetails() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMovie() {
      try {
        setLoading(true);
        setError("");

        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (err) {
        setError("No fue posible cargar los detalles de esta película.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadMovie();
  }, [movieId]);

  if (loading) {
    return <main className="details-page"><p>Cargando detalles...</p></main>;
  }

  if (error || !movie) {
    return (
      <main className="details-page">
        <p>{error || "Película no encontrada."}</p>
        <Link to="/">Volver al catálogo</Link>
      </main>
    );
  }

  const poster = getMovieImage(movie.poster_path);
  const backdrop = getMovieImage(movie.backdrop_path, "w1280");

  const releaseDate = movie.release_date
    ? new Date(`${movie.release_date}T12:00:00`).toLocaleDateString("es-MX", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Fecha no disponible";

  return (
    <main className="details-page">
      {backdrop && (
        <div className="movie-backdrop">
          <img src={backdrop} alt="" />
        </div>
      )}

      <section className="movie-details">
        <div className="details-poster">
          {poster ? (
            <img src={poster} alt={`Póster de ${movie.title}`} />
          ) : (
            <div className="no-poster">Sin póster disponible</div>
          )}
        </div>

        <div className="details-info">
          <Link to="/" className="back-link">
            ← Volver al catálogo
          </Link>

          <h1>{movie.title}</h1>

          {movie.tagline && (
            <p className="movie-tagline">{movie.tagline}</p>
          )}

          <div className="details-meta">
            <span>★ {movie.vote_average?.toFixed(1) ?? "N/A"} / 10</span>
            <span>{releaseDate}</span>
          </div>

          <h2>Sinopsis</h2>
          <p className="movie-overview">
            {movie.overview || "No hay una sinopsis disponible."}
          </p>

          <h2>Géneros</h2>
          <div className="genre-list">
            {movie.genres?.length > 0 ? (
              movie.genres.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))
            ) : (
              <span>No disponibles</span>
            )}
          </div>

          {movie.runtime > 0 && (
            <p className="movie-runtime">
              Duración: {movie.runtime} minutos
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default MovieDetails;