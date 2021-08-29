import { Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/Header';
import CheckNumber from './pages/CheckNumber';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
        <Switch>
          <Route exact path="/">
            <CheckNumber />
          </Route>
          <Route path="/signup" >
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
