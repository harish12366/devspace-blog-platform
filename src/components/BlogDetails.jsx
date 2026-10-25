import { useParams } from "react-router-dom";
import blogs from "../data/BlogsData";

const BlogDetails = () => {
  const { id } = useParams();

  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <article className="blog-details">
      <span>{blog.domain}</span>
      <h1>{blog.title}</h1>
      <img src={blog.img} alt={blog.title} />
      <p>{blog.content}</p>
    </article>
  );
};

export default BlogDetails;