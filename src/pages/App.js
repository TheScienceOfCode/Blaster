import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './media/logo.svg';
import './styles/App.css';

import Nav from '../components/navigation/Nav';

class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (<Nav location={location}/>)}
      />
    );
  }
}

export default App;
