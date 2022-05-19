import { Link, Route } from "react-router-dom";
import Home from './views/Home/index' // 路由组件
import Test from './views/Test/index' // 路由组件
import './App.css';
import './style/reset.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{ marginBottom: '10px', fontSize: '22px' }}>学习 react-router</h2>
        <div className='app-container'>
          <div>
            <Link className='span-a' to="/home">Home</Link>
            <Link className='span-a' to="/test">Test</Link>
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
