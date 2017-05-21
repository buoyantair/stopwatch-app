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
    };
    this.interval = NaN;
  };

  resetState(){
    this.setState({hours: 0, minutes: 0, seconds: 0});
  }

  componentWillMount(){
    clearInterval(this.interval);
  }

  componentDidMount(){
    this.interval = setInterval(()=>{
      if(this.state.seconds === 59){
        this.setState({hours: this.state.hours, minutes: this.state.minutes+1, seconds: 0});
      } else if (this.state.minutes === 59){
        this.setState({hours: this.state.hours+1, minutes: 0, seconds: 0});
      } else {
        this.setState({hours: this.state.hours, minutes: this.state.minutes, seconds: this.state.seconds+1});
      }
    }, 1000);
  }
  render() {
    return (
      <div>
        <AppHeader />
        <Stopwatch hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} />
        <Footer callback={this.resetState.bind(this)}/>
      </div>
    );
  }
}

export default App;
