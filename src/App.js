import React from 'react';
import {
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import './App.css';
import CategoryList from "./containers/CategoryList";
import CategoryItem from "./containers/CategoryItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  function renderNavigation() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Media Library
          </Typography>
          <NavLink className='nav-link' activeClassName='active' to="/" exact><Button color="inherit">Home</Button></NavLink>
          <NavLink className='nav-link' activeClassName='active' to="/categories"><Button color="inherit">Categories</Button></NavLink>
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <Container>
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
    </Container>
  );
}

export default App;
