import { FETCH_POSTS, NEW_POST } from "./types";
import axios from "axios";
export const fetchposts = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/")
    .then((res) => {
      console.log("Action called");
      dispatch({
        type: FETCH_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err.message));
};

export const createPost = (postData) => (dispatch) => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts/", postData)
    .then((res) =>
      dispatch({
        type: NEW_POST,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err.message));
};
