import { Route, Switch } from "react-router-dom";
import Home from './views/Home' // 路由组件
import Test from './views/Test' // 路由组件
import MyNavLink from "./views/MyNavLink";
import About from "./views/About";
import './App.css';
import './style/reset.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{ marginBottom: '10px', fontSize: '22px' }}>学习 react-router</h2>
        <div className='app-container'>
          <div>
            <MyNavLink to="/home" key="home">home</MyNavLink>
            <MyNavLink to="/test" key="test">test</MyNavLink>
          </div>
          <article style={{ marginLeft: '10px' }}>
            我是自路由组件中的内容
            {/* 如果不包裹 switch 的话 test 会识别到两个组件 test 和 about 的内容都会显示 */}
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/test" component={Test} />
              <Route path="/test" component={About} />
            </Switch>
          </article>
        </div>
      </header>
    </div>
  );
}

export default App;
