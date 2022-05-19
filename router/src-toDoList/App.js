import './App.css';
import './style/reset.css';
import Home from './views/Home'
import Test from './views/Test'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Test />
      </header>
    </div>
  );
}

export default App;
