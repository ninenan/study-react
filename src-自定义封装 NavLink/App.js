import { Route } from "react-router-dom";
import Home from './views/Home' // 路由组件
import Test from './views/Test' // 路由组件
import MyNavLink from "./views/MyNavLink";
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
            <Route path="/home" component={Home} />
            <Route path="/test" component={Test} />
          </article>
        </div>
      </header>
    </div>
  );
}

export default App;
