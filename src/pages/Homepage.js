import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchPosts from "../store/posts/actions";
import { selectPosts } from "../store/posts/selectors";

//How to fetch data with a thunk
//1. Write an async function in action (thunk) and make axios request
//2. import the function in the component
//3. dispatch the function inside useEffect to see the console.log
//4. Back to the actions, dispatch the action inside the function with data
//5. Write a case in the reducer to handle the data
//6. Write a selector to get the data
//7. Import the selector in the component
//8. Map over the data

//Display only five posts
//1. url => add limit and offset
//2. Make a dynamic offset
//3. modify the case in the reducer, so it keeps the previous post and add the new ones
//4. make a button to fetch next 5 posts

export default function Homepage() {

  const dispatch = useDispatch()

  const posts = useSelector(selectPosts)
  // console.log("posts", posts)

  useEffect(() => {
    dispatch(fetchPosts)
  }, [])

  return (
    <div>
      <h1>List of posts</h1>
      {!posts 
        ? "Loading"
        : posts.map(post => {
          return (
            <div>
              <p><b>{post.title}</b></p>
              <p>{post.content}</p>
            </div>
          )
        })}
        <button onClick={() => dispatch(fetchPosts)}>More posts</button>
    </div>
  );
}