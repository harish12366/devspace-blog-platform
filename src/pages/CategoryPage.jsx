import { useParams } from "react-router-dom";
import blogs from "../data/BlogsData";
import BlogCard from "../components/BlogCard";

const CategoryPage = () => {
  const { categoryName } = useParams();

  const filteredBlogs = blogs.filter(
    (blog) => blog.domain === decodeURIComponent(categoryName)
  );

  return (
    <div className="blog-container">
      {filteredBlogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default CategoryPage;