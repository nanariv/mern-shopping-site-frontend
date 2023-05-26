import * as React from "react";
import { Switch, Route, Router } from "wouter";
import { useLocation } from 'react-router-dom'
import Home from "../pages/home2";
import About from "../pages/about2";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Profile from "../pages/profile";
import SimpleTabs from "../pages/navBar";
import Admin from "../pages/admin";
import Crud from "../pages/crud";

/**
* The router is imported in app.jsx
*
* Our site just has two routes in it–Home and About
* Each one is defined as a component in /pages
* We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

export default () => (
    <Switch>
      <Route path="/" component={SimpleTabs} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    <Route path="/profile" component={Profile} />
    <Route path="/admin" component={Admin} />
    <Route path="/crud" component={Crud} />
    </Switch>
);
