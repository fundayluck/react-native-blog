import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (blog) => {
    setBlogs([...blogs, { title: `Blog Post #${blogs.length + 1}` }]);
  };

  return (
    <BlogContext.Provider value={{ data: blogs, addBlog: addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
