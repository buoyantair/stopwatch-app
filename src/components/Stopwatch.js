import React, { Component } from 'react';

class Stopwatch extends Component{
  constructor(props){
    super(props);
    this.state = {
        hours: this.props.hours,
        minutes: this.props.minutes,
        seconds: this.props.seconds
    }
  }

  leadingzero(num){
    return num < 10 && num > 0 ? "0" + num : num;
  }

  render(){
    let boxSize = "300px"

    let container = {
      minWidth: "100vw",
      minHeight: "50vh",
      background: "#DADAD9",
      textAlign: "center",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      color: "#36382E"
    }

    let hours = {
      width: boxSize,
      height: boxSize,
      background: "#EDE6E3",
      borderRadius: "10px",
      textAlign: "center",
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center",
      color: "#36382E",
      margin: "20px",
      fontFamily: 'Lobster, sans-serif',
      fontSize: "10em"
    }

    let minutes = {
      width: boxSize,
      height: boxSize,
      background: "#EDE6E3",
      borderRadius: "10px",
      textAlign: "center",
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center",
      color: "#36382E",
      margin: "20px",
      fontFamily: 'Lobster, sans-serif',
      fontSize: "10em"
    }

    let seconds = {
      width: boxSize,
      height: boxSize,
      background: "#EDE6E3",
      borderRadius: "10px",
      textAlign: "center",
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center",
      color: "#36382E",
      margin: "20px",
      fontFamily: 'Lobster, sans-serif',
      fontSize: "10em"
    }

    return (
      <div style={container}>
        <div style={hours}>{this.leadingzero(this.state.hours)}</div>
        <div style={minutes}>{this.leadingzero(this.state.hours)}</div>
        <div style={seconds}>{this.leadingzero(this.state.hours)}</div>
      </div>
    );
  }
}


export default Stopwatch;
