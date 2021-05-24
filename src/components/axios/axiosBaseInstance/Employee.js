import React, { Component } from "react";
import API from "./api";

export default class Employee extends Component {
  state = {
    id: 0,
  };

  handleChange = (e) => {
    this.setState({ id: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    API.delete(`users/${this.state.id}`).then((res) => {
      console.log("response data", res.data);
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Person ID:</label>
          <input type="text" name="id" onChange={this.handleChange} />
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}
