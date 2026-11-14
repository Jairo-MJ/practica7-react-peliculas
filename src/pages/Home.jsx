import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/tmdb";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Cargar películas populares al entrar
  useEffect(() => {
    async function loadMovies() {
      try {
        setLoading(true);
        const data = await getPopularMovies();
        setMovies(data);
        setError("");
      } catch (err) {
        setError("No fue posible cargar las películas. Intenta nuevamente.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  // Buscar películas por nombre
  async function handleSearch(event) {
    event.preventDefault();

    if (!search.trim()) {
      try {
        setLoading(true);
        setError("");
        const data = await getPopularMovies();
        setMovies(data);
      } catch (err) {
        setError("No fue posible cargar las películas.");
        console.error(err);
      } finally {
        setLoading(false);
      }

      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await searchMovies(search.trim());
      setMovies(data);
    } catch (err) {
      setError("Ocurrió un problema al buscar películas.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="home-page">
      <section className="catalog-header">
        <h1>Descubre películas</h1>
        <p>Explora películas populares y encuentra tu próxima favorita.</p>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar una película..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <button type="submit">Buscar</button>
        </form>
      </section>

      <section className="catalog-section">
        <h2>{search.trim() ? "Resultados de búsqueda" : "Películas populares"}</h2>

        {loading && <p>Cargando películas...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && movies.length === 0 && (
          <p>No se encontraron películas.</p>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;