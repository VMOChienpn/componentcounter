import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ClassComponent from './Components/ClassComponent';
import FunctionComponent from './Components/FunctionComponent';
import FCredux from './Components/FCredux';
import FCreduxImmerJS from './Components/FCreduxImmerJS';

function App() {
  return (
    <Router>
      <div className="header">
        <ul className="header__list">
          <li className="header__list-item">
            <Link to="/classcomponent">Class Component</Link>
          </li>
          <li className="header__list-item">
            <Link to="/functioncomponent">Function Component</Link>
          </li>
          <li className="header__list-item">
            <Link to="/functioncomponentredux">Function Component Redux</Link>
          </li>
          <li className="header__list-item">
            <Link to="/functioncomponetreduxinmerjs">Function Component Redux Immerjs</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/classcomponent">
            <ClassComponent />
          </Route>
          <Route path="/functioncomponent">
            <FunctionComponent />
          </Route>
          <Route path="/functioncomponentredux">
            <FCredux />
          </Route>
          <Route path="/functioncomponetreduxinmerjs">
            <FCreduxImmerJS />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
