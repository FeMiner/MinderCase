import './index.scss';
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="editor-title">
        <h1 className="editor-title">MinderCase</h1>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById("header"));
