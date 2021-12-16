import { combineReducers } from "redux";
// import someFeatureReducer from "./someFeature/reducer";
import postSliceReducer from "./posts/reducer"

const reducer = combineReducers({
  posts: postSliceReducer
});

export default reducer;