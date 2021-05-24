import React, { Component } from "react";
import Axios from "axios";
export default class PersonInputDelete extends Component {
  state = {
    id: "",
  };

  handleChange = (e) => {
    this.setState({ id: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    Axios.delete(
      `https://jsonplaceholder.typicode.com/users/${this.state.id}`
    ).then((response) => {
      console.log(response);
      console.log(response.data);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Person ID:</label>
          <input type="number" name="id" onChange={this.handleChange} />
          <button type="submit"> Delete</button>
        </form>
      </div>
    );
  }
}
