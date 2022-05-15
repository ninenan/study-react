import './App.css';
import './style/reset.css';
import Home from './views/Home'
import Test from './views/Test'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{marginBottom: '10px', fontSize: '22px'}}>学习兄弟组件传值</h2>
        <p style={{marginBottom: '10px'}}>通过使用 pubsub-js</p>
        <Home />
        <Test />
      </header>
    </div>
  );
}

export default App;
