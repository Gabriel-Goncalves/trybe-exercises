import './App.css';
import GreatGrandMother from './Components/GreatGrandMother';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <GreatGrandMother />
      <br />
      <br />
      <br />
      <br />
      <h1>UseState Counter</h1>
      <Counter />
    </div>
  );
}

export default App;
