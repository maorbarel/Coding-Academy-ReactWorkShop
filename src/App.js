import React, { Component } from 'react';
import Router from './routes/routers';
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <section className="App">
        <NavBar />
        <Router></Router>
      </section>
    );
  }
}

export default App;
