const initialState = {
  loading: true,
  post: null,
};

export default function postPageSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "post/startLoading": {
      return {
        ...state,
        loading: true
      };
    }
    case "post/postFetched": {
      // console.log("action", action)
      return {
        ...state,
        post: action.payload
      }
    }
    default: {
      return state;
    }
  }
}