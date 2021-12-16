const initialState = {
  loading: true,
  posts: [],
};

export default function postSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "feed/startLoading": {
      return {
        ...state,
        loading: true
      };
    }
    case "post/postsFetched": {
      // console.log("action", action.payload)
      return {
        ...state,
        posts: [...state.posts, ...action.payload]
      }
    }
    default: {
      return state;
    }
  }
}