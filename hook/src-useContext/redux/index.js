import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// 主要是链接浏览器中的开发者工具
import { composeWithDevTools } from "redux-devtools-extension";
// 引入所用的 reducer
import allReducers from "./store";

export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))
// 如果没有第二个参数
// export default createStore(allReducers, composeWithDevTools())

