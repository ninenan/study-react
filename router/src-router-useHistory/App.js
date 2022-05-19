import { Route, Switch, Redirect } from "react-router-dom";
import Home from './views/Home' // 路由组件
import Test from './views/Test' // 路由组件
import About from "./views/About";
import MyNavLink from "./views/MyNavLink";
import Header from "./views/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header>学习 react-router</Header>
        <div className='app-container'>
          <div>
            <MyNavLink to="/home">home</MyNavLink>
            <MyNavLink to="/test">test</MyNavLink>
            <MyNavLink to="/about">about</MyNavLink>
          </div>
          <article style={{ marginLeft: '10px' }}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/test" component={Test} />
              <Route path="/about" component={About} />
              <Redirect to='/test' />
            </Switch>
          </article>
        </div>
      </header>
    </div>
  );
}

export default App;
