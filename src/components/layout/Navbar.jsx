import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-neutral navbar mb-12 shadow-lg text-neutral-content">
      <div className="container mx-auto">
        <div className="px-2 mx-2">
          <FaGithub className="text-3xl inline pr-2" />
          <Link to="/" className="text-lg font-bold align-middle">
            Github Finder
          </Link>
        </div>

        <div className="bg flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
