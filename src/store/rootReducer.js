import { combineReducers } from "redux";
// import someFeatureReducer from "./someFeature/reducer";
import postSliceReducer from "./posts/reducer"
import postPageSliceReducer from "./postPage/reducer"

const reducer = combineReducers({
  posts: postSliceReducer,
  postPage: postPageSliceReducer
});

export default reducer;