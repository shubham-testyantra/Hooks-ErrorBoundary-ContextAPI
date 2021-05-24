import React, { Component } from "react";
import PureComponents from "./PureComponents";
import RegularComponent from "./RegularComponent";

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Axel Blaze",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "Blaze Axel" });
    }, 3000);
  }

  //Regular Component gets called when there is a update or without
  //Pure Component gets called when ther is an update only!!!

  render() {
    console.log("***********Parent Component***********");
    return (
      <div>
        {/* Sending a name as props for a regualr and Pure Components */}
        {/* names: it is prop name, name is state value name */}
        <RegularComponent names={this.state.name} />
        <PureComponents names={this.state.name} />
      </div>
    );
  }
}
