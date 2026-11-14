import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function NotFound() {
  return (
    <main className="not-found-page">
      <h1>404</h1>
      <p>La página que buscas no existe.</p>
      <a href="/">Volver al inicio</a>
    </main>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;