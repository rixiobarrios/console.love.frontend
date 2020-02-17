import React, { Component } from 'react';
import './App.css';
import ProfilesList from './components/ProfilesList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ProfilesList />
      </div>
    );
  }
}

export default App;
