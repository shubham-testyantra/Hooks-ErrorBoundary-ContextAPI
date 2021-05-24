import React from "react";

//refernces without the React.createRef()
export default class MyReference extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sayings: "",
    };
  }

  updateSayings = (e) => {
    this.setState({ sayings: this.refs.Anythought.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          ref="Anythought"
          onChange={this.updateSayings.bind(this)}
        />

        <h2>{this.state.sayings}</h2>
      </div>
    );
  }
}
