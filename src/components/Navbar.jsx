import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Payung Ilmu</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/quiz">Quiz</Link>
        <Link className="nav-link" to="/gallery">Gallery</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
export default Navbar;