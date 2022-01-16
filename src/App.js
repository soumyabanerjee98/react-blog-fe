import './App.css';
import { Route, Switch } from 'react-router-dom';
import Topbar from './components/Topbar/topbar';
import SignUp from './components/Auth/signup';
import SignIn from './components/Auth/signin';

function App() {
  return (
      <div className="App">
        <Topbar/>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
  );
}

export default App;
