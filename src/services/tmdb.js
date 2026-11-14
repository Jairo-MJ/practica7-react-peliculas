const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

// Función general para realizar peticiones a TMDB
async function fetchTMDB(endpoint) {
    if (!API_KEY) {
        throw new Error("No se encontró la API Key de TMDB.");
    }

    const separator = endpoint.includes("?") ? "&" : "?";
    const url = `${BASE_URL}${endpoint}${separator}api_key=${API_KEY}&language=es-MX`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Error de TMDB: ${response.status}`);
    }

    return response.json();
}

// Obtener películas populares
export async function getPopularMovies() {
    const data = await fetchTMDB("/movie/popular");
    return data.results;
}

// Buscar películas por nombre
export async function searchMovies(query) {
    const data = await fetchTMDB(
        `/search/movie?query=${encodeURIComponent(query)}`
    );

    return data.results;
}

// Obtener información detallada de una película
export async function getMovieDetails(movieId) {
    return fetchTMDB(`/movie/${movieId}`);
}

// Construir la dirección de los pósteres
export function getMovieImage(path, size = "w500") {
    if (!path) {
        return null;
    }

    return `${IMAGE_URL}/${size}${path}`;
}