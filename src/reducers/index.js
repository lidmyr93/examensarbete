const initState = {
  posts: [],
  text: "hej"
};

const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.data
      };

    default:
      return { ...state };
  }
};

export default mainReducer;

/* if (action.type === "GET_POSTS") {
    return {
      ...state,
      posts: action.data
    }; */
