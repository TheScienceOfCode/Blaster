import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Articles from "../../pages/articles/Articles";

const Nav = ({location}) => (
  <Switch key={location.key}>
    <Route exact path="/"   location={location} component={Home} />
    <Route path="/articles" location={location} component={Articles} />
    <Route path="/about"     location={location} component={About} />
    <Route path="/contact"  location={location} component={Contact} />
  </Switch>
);

export default Nav;
