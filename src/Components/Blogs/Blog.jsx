import React, { useEffect, useState } from "react";
import useTitle from "../../Title/useTitle";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useTitle("Blog");

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="my-12">
      {blogs.map((blog, index) => (
        <div key={blog.id}>
          <h1 className="text-xl font-bold text-green-700 mb-3">
            {index + 1}. Question: {blog.question}
          </h1>
          <p className="text-green-700 mb-3 text-lg">ans: {blog.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
