import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
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
  return (title, content) => {
    dispatch({ type: "add_blog", payload: { title, content } });
  };
};

const deleteBlog = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blog", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlog, deleteBlog },
  []
);
