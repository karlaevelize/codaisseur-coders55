// const api = "https://codaisseur-coders-network.herokuapp.com/posts"
import axios from "axios"

export function startLoading() {
  return {
    type: "post/startLoading"
  };
}

export function postsFetched(data){
  return {
    type: "post/postsFetched",
    payload: data
  }
}

export default async function fetchPosts(dispatch, getState){
  const API_URL = "https://codaisseur-coders-network.herokuapp.com"

  const offset = getState().posts.posts.length

  const response = await axios.get(`${API_URL}/posts?limit=2&offset=${offset}`)
  console.log("response", response)
  dispatch(postsFetched(response.data.rows))
}