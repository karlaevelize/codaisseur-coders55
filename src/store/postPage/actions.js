import axios from "axios"
import { postsFetched } from "../posts/actions";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function startLoading() {
  return {
    type: "post/startLoading"
  };
}

export function postFetched(data){
  return {
    type: "post/postFetched",
    payload: data
  }
}

export default function fetchPost(id) {
  return async function thunk(dispatch, getState){
    const response = await axios.get(`${API_URL}/posts/${id}`)
    // console.log("one post", response)
    dispatch(postFetched(response.data))
  }
}