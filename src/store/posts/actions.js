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
  const response = await axios.get("https://codaisseur-coders-network.herokuapp.com/posts")
  console.log("response", response)
  dispatch(postsFetched(response.data.rows))
}