import listsReducer from "./ListsReducer";
import { combineReducers } from "redux";

export default combineReducers({
  lists: listsReducer,
});
