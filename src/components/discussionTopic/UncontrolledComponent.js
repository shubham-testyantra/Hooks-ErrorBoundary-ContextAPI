import React, { Component } from "react";

export default class UncontrolledComponent extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.input = React.createRef();
  }

  handleSubmit(e) {
    alert("A name was submitted: " + this.input.current.value);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Uncontrolled Component</h2>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input type="text" ref={this.input} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
