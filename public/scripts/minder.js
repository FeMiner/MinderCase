import React, { Component } from "react";
import ReactDOM from "react-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <h1 classNamw="editor-title">MinderCase</h1>
      )
  }
}


ReactDOM.render(<Header/>, document.getElementById('header'));
