import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const reducer = (state, action) => {
  switch (action.type) {
    case "get_blog":
      return action.payload;
    case "edit_blog":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
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

const getBlog = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");

    dispatch({ type: "get_blog", payload: response.data });
  };
};

const addBlog = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });

    if (callback) {
      callback();
    }
  };
};

const deleteBlog = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blog", payload: id });
  };
};

const editBlog = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });

    dispatch({ type: "edit_blog", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlog, deleteBlog, editBlog, getBlog },
  []
);
