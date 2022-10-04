import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './Components/Auth';
import Header from './Components/Header/Header';
import Tasks from './Components/Tasks';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={ Auth } />
        <Route path="/tasks" component={ Tasks } />
        <Route path="*">
          <Redirect to="/auth/sign-in" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
