import { createStore } from "redux";
import reducer from "./Reducers/CombinedReducers";
export default createStore(reducer);
