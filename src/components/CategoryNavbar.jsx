
import { NavLink } from "react-router-dom";
import blogs from "../data/BlogsData";

const CategoryNavbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const categories = ["All Articles"];

  blogs.forEach((blog) => {
    if (!categories.includes(blog.domain)) {
      categories.push(blog.domain);
    }
  });

  return (
    <nav
      className={`category-navbar ${
        isMenuOpen ? "mobile-open" : ""
      }`}
    >
      <div className="mobile-menu-heading">
        <span>Categories</span>
        <button onClick={() => setIsMenuOpen(false)}>
          Close ✕
        </button>
      </div>

      {categories.map((category) => (
        <NavLink
          key={category}
          to={
            category === "All Articles"
              ? "/"
              : `/category/${encodeURIComponent(category)}`
          }
          className="category-link"
          onClick={() => setIsMenuOpen(false)}
        >
          {category}
        </NavLink>
      ))}
    </nav>
  );
};

export default CategoryNavbar;
