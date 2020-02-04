import axios from "axios";
export const FETCH_POSTS = "FETCH_WORKPHOTOS";
const API_BASE_URL = "https://cdn.contentful.com";
const API_SPACE_ID = `hxzrkpn9wcyv`;
const API_TOKEN = "UQrJ4wUkO0_luUL5ibOMFQRkP0GNVXtkUgkJH4Ki2no";
export function fetchPosts() {
  const request = axios.get(
    `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=workPhoto`
  );
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
