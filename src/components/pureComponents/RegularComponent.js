import React, { Component } from "react";

export default class RegularComponent extends Component {
  render() {
    console.log("*******Regular Component is Rendering******");

    return (
      <div>
        <h2>
          Regular Component : <b>{this.props.names}</b>
        </h2>
      </div>
    );
  }
}
