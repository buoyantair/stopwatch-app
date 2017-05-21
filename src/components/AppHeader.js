import React, {Component} from 'react';

class AppHeader extends Component{
  render(){
    let headerStyle = {
      minWidth: "100vw",
      minHeight: "20vh",
      background: "linear-gradient(to right, #185a9d, #43cea2)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      textAlign: "center",
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center"
    }

    let h1 = {
      fontSize: "5em",
      fontFamily: "Lobster, sans-serif",
      color: "#FFF"
    }

    return (
      <div style={headerStyle}>
        <h1 style={h1}>Stop watch</h1>
      </div>
    );
  }
}

export default AppHeader;
