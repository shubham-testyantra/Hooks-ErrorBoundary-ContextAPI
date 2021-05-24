import React, { Component } from "react";

export default class MyRef extends Component {
  constructor(props) {
    super(props);

    this.callRef = React.createRef();

    this.handleRef = this.handleRef.bind();
  }

  handleRef() {
    this.callRef.current.focus();
  }

  render() {
    {
      return (
        <div>
          <input type="text" ref={this.callRef} />
          <button type="submit" onClick={this.handleRef}></button>
        </div>
      );
    }
  }
}
