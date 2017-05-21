import React, { Component } from 'react';

class Stopwatch extends Component{
  leadingzero(num){
    return num < 10 && num >= 0 ? "0" + num : num;
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
        <div style={hours}>{this.leadingzero(this.props.hours)}</div>
        <div style={minutes}>{this.leadingzero(this.props.minutes)}</div>
        <div style={seconds}>{this.leadingzero(this.props.seconds)}</div>
      </div>
    );
  }
}


export default Stopwatch;
