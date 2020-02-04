import { fetchPosts } from "../api";

export function loadPosts() {
  return async dispatch => {
    const response = await fetchPosts();
    return dispatch(getPosts(response));
  };
}

export function getPosts(data) {
  return {
    type: "GET_POSTS",
    data: data
  };
}
