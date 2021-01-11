import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['study', 'lunch', 'snack', 'dinner']

function App() {
  return (
    <div className="App">
      <ul>{compromissos.map(atividade => task(atividade))}</ul>
    </div>
  );
}

export default App;
