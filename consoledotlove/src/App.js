import React, { Component } from 'react';
import './App.css';
import ProfilesList from './components/ProfilesList';
import Welcome from './components/Welcome';
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <header>{/* <Link to="/profiles">All Profiles</Link> */}</header>
        <main>
          <Switch>
            <Welcome />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
