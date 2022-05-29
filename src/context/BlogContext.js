import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    // case "edit_blog":
    //   return
    case "delete_blog":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "add_blog":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const addBlog = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blog", payload: { title, content } });
    callback();
  };
};

const deleteBlog = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blog", payload: id });
  };
};

const editBlog = (dispatch) => {
  return (id, title, content) => {
    dispatch({ type: "edit_blog", payload: { id, title, content } });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlog, deleteBlog, editBlog },
  [{ title: "Blog Post 1", content: "This is the first blog post!", id: 1 }]
);
