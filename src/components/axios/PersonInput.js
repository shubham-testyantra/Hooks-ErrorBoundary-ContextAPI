import React, { Component } from "react";
import Axios from "axios";

export default class PersonInput extends Component {
  state = {
    name: "",
  };

  //Execute 1
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault(); //stops the browser from refreshing the page

    //Create a new Object
    const user = {
      name: this.state.name,
    };

    console.log("User Object Value", user);

    //user object as a payload
    Axios.post(`https://jsonplaceholder.typicode.com/users`, { user }).then(
      (response) => {
        console.log(response);
        console.log("Response Data", response.data);
      }
    );
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Person Name</label>
          <input type="text" name="name" onChange={this.handleChange} />
          <button type="submit"> Add</button>
        </form>
      </div>
    );
  }
}
