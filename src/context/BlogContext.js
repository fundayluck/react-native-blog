import React, { useReducer } from "react";

const BlogContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "add_blog":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogs, dispatch] = useReducer(reducer, []);

  const addBlog = () => {
    dispatch({ type: "add_blog" });
  };

  return (
    <BlogContext.Provider value={{ data: blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
