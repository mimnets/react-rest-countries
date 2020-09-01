import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Country from './components/Countries/Countries';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/country">Country</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <Home></Home>
            </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/country">
            <Country></Country>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
