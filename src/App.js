import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage';
import ContactDetailsPage from './pages/ContactDetailsPage'
import StatisticPage from './pages/StatisticPage'


class App extends Component {
  render() {
    return (
      <section className="App">
        {/* <HomePage /> */}
        <ContactPage />
        {/* <ContactDetailsPage /> */}
        {/* <StatisticPage /> */}
      </section>
    );
  }
}

export default App;
