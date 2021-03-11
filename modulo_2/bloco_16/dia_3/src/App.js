import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Clients from './components/Clients';
import ClientRegister from './components/ClientRegister';

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/clients" component={Clients} />
      <Route exact path="/clientregister" component={ClientRegister} />
    </Switch>
  );
}

export default App;
