import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import fetchPost from "../store/postPage/actions"
import { selectPost } from "../store/postPage/selectors"

export default function DetailsPage(){

//Details page
//1. Register a dynamic route
//2. Link the title to the dynamic page
//3. Import useParams
//4. Console params to check if it's all good
//5. Fetch data with a thunk

  // const params = useParams()
  // console.log("params", params)
  const { postId } = useParams()

  const dispatch = useDispatch()

  const post = useSelector(selectPost)

  console.log("post in component", post)

  useEffect(() => {
    dispatch(fetchPost(postId))
  }, [])

  return(
    <div>
      <h1>Details Page</h1>
      {!post 
        ? "Loading" 
        : <div>
          <p><b>{post.title}</b></p>
          <p>{post.content}</p>
        </div>}
    </div>
  )
}