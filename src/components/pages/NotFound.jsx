import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div>
          <h1 className="text-8xl font-bold mb-8">Oops!</h1>
          <p className="text-6xl mb-8">404 - Page not found!</p>
          <Link to="/" className="btn btn-primary">
            <FaHome className="mr-2" /> Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
