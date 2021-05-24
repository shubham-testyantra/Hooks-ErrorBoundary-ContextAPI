import Axios from "axios";
import React, { Component } from "react";

// import Axios from "axios";
export default class PersonList extends Component {
  state = {
    persons: [],
  };
  componentDidMount() {
    Axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      console.log("My response", res);
      this.setState({ persons: res.data });
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.persons.map((person) => {
            return <li key={person.id}>{person.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
