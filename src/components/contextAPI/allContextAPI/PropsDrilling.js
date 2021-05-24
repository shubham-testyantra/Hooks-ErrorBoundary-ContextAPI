import React, { Component } from "react";

//Child Component
const Trial = (props) => {
  return <h2>Vacation is in: {props.mname}</h2>;
};

const Lift = (props) => {
  return <Trial mname={props.names} />;
};

//Parent Component
export default class Resort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Snow Mountain",
    };
  }

  render() {
    return (
      <>
        <Lift names={this.state.name} />
      </>
    );
  }
}
