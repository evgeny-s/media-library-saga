import React from 'react';
import {
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import './App.css';
import CategoryList from "./containers/CategoryList";
import CategoryItem from "./components/CategoryItem";

function App() {
  function renderNavigation() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Medium</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className='nav-link' activeClassName='active' to="/" exact>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav-link' activeClassName='active' to="/categories">Categories</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  return (
    <div>
      {renderNavigation()}
      <Switch>
        <Route path="/" exact>
          <h3>Welcome to Media Library!</h3>
        </Route>
        <Route path="/categories">
          <CategoryList />
        </Route>
        <Route path="/category/:id">
          <CategoryItem />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
