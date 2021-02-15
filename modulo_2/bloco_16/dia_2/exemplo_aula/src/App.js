import Header from './Components/Header';
import Player from './Components/Player';
import Sidebar from './Components/Sidebar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Player />
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
