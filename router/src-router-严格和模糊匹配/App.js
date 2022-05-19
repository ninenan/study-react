import { Route, Switch } from "react-router-dom";
import Home from './views/Home' // 路由组件
import Test from './views/Test' // 路由组件
import About from "./views/About";
import MyNavLink from "./views/MyNavLink";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{ marginBottom: '10px', fontSize: '22px' }}>学习 react-router</h2>
        <div className='app-container'>
          <div>
            <MyNavLink to="/home">home</MyNavLink>
            <MyNavLink to="/test">test</MyNavLink>
            <MyNavLink to="/about/d">about</MyNavLink>
          </div>
          <article style={{ marginLeft: '10px' }}>
            我是自路由组件中的内容
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/test" component={Test} />
              <Route path="/about" component={About} />
              <Route path="/about/a" exact component={About} >
                这里不会显示
                因为开启了精准匹配 添加了 exact 属性
              </Route>
              <Route path="/about/a/b" component={About} >
                这里不会显示
                模糊匹配的话 上面 to 的内容一定要包含这里 path 的内容，而且一定要从头开始
              </Route>
            </Switch>
          </article>
        </div>
      </header>
    </div>
  );
}

export default App;
