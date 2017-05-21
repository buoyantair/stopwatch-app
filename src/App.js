import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import Stopwatch from './components/Stopwatch';
import Footer from './components/Footer';
import './reset.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  render() {
    return (
      <div>
        <AppHeader />
        <Stopwatch hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} />
        <Footer />
      </div>
    );
  }
}

export default App;
