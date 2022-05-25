import { createStore, applyMiddleware, combineReducers } from "redux";
import countReducer from "./count/countReducer";
import personReducer from "./person/personReducer";
import thunk from "redux-thunk";

const allReducers = combineReducers({
  count: countReducer,
  persons: personReducer
})


export default createStore(allReducers, applyMiddleware(thunk))
