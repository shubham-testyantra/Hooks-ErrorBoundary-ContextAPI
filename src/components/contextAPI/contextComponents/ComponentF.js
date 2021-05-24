import React, { Component } from "react";
import { UserConsumer } from "./useContext";

export default class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(cartoonName) => {
            return <h2>Hello My favorite Cartoon is {cartoonName}</h2>;
          }}
        </UserConsumer>
      </div>
    );
  }
}
