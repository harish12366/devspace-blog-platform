
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <img
        src="/images/404.svg"
        alt="Page not found"
      />

      <h1>404</h1>
      <h2>Page Not Found</h2>

      <p>
        Oops! The page you're looking for doesn't exist
        or may have been removed.
      </p>

      <Link to="/" className="home-btn">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
