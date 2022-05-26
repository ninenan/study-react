import { combineReducers } from "redux";
import count from "./count/countReducer";
import persons from "./person/personReducer";

const allReducers = combineReducers({
  count,
  persons
})

export default allReducers
