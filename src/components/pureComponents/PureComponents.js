import React, { PureComponent } from "react";

class PureComponents extends PureComponent {
  render() {
    console.log("*********Pure Component is Rendering***********");

    return (
      <div>
        <h2>
          Pure Components : <b>{this.props.names}</b>
        </h2>
      </div>
    );
  }
}

export default PureComponents;
