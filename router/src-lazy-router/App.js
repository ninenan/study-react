import { Route, NavLink } from "react-router-dom";
// 路由懒加载需要用到的方法和组件
import { lazy, Suspense } from "react";
import './App.css';
import Count from "./views/Count";
import Person from "./views/Person";
import Loading from "../src/components/Loading";
// 路由懒加载
const User = lazy(() => import('./views/User'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          学习 redux && react-redux
        </h2>
        <Count />
        <Person />
        <NavLink to="/user">to user page</NavLink>
        <Suspense fallback={
          <Loading />
        }>
          <Route path="/user" component={User} />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
