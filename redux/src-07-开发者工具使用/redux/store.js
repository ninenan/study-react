import { createStore, applyMiddleware, combineReducers } from "redux";
import countReducer from "./count/countReducer";
import personReducer from "./person/personReducer";
import thunk from "redux-thunk";
// 主要是链接浏览器中的开发者工具
import { composeWithDevTools } from "redux-devtools-extension";

const allReducers = combineReducers({
  count: countReducer,
  persons: personReducer
})

export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))
// 如果没有第二个参数
// export default createStore(allReducers, composeWithDevTools())
