import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand">
        Movie Explorer
      </Link>

      <nav>
        <Link to="/">Inicio</Link>
      </nav>
    </header>
  );
}

export default Navbar;