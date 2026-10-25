import blogs from "../data/BlogsData";
import BlogCard from "../components/BlogCard";

const HomePage = () => {
  return (
    <div className="blog-container">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default HomePage;