
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <article className="blog-card">
      <img src={blog.img} alt={blog.title} />

      <div className="blog-card-content">
        <span className="blog-category">{blog.domain}</span>

        <h2>{blog.title}</h2>

        <p>{blog.content}</p>

        <Link to={`/blog/${blog.id}`} className="read-more">
          Read More →
        </Link>
      </div>
    </article>
  );
}

export default BlogCard;
