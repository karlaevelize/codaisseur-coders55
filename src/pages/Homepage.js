import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchPosts from "../store/posts/actions";

//How to fetch data with a thunk
//1. Write an async function in action (thunk) and make axios request
//2. import the function in the component
//3. dispatch the function inside useEffect to see the console.log
//4. Back to the actions, dispatch the action inside the function with data
//5. Write a case in the reducer to handle the data
//6. Write a selector to get the data
//7. Import the selector in the component
//8. Map over the data

export default function Homepage() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts)
  }, [])

  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
}