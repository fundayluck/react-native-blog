import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_blog":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlog = (dispatch) => {
  return () => {
    dispatch({ type: "add_blog" });
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlog },
  []
);
