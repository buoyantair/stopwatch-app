import React, { Component } from 'react';

class Footer extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    let container = {
      minWidth: "100vw",
      minHeight: "30vh",
      background: "#36382E",
      textAlign: "center",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      color: "#EDE6E3"
    }

    let button = {
      minWidth: "250px",
      minHeight: "100px",
      background: "linear-gradient(30deg, #185a9d, #43cea2)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      textAlign: "center",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      margin: "auto",
      border: "none",
      borderRadius: "10px",
      fontFamily: 'Lobster, sans-serif',
      fontSize: "3em"
    }

    return (
      <div style={container}>
        <button style={button} onClick={this.props.start}> START </button>
        <button style={button} onClick={this.props.stop}> STOP </button>
        <button style={button} onClick={this.props.reset}> RESET </button>
      </div>
    );
  }
}


export default Footer;
