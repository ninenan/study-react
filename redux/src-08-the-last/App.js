import './App.css';
import Count from "./views/Count";
import Person from "./views/Person";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          学习 redux && react-redux
        </h2>
        <Count />
        <Person />
      </header>
    </div>
  );
}

export default App;
