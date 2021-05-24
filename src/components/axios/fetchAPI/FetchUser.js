import React, { Component } from "react";

export default class FetchUser extends Component {
  state = {
    loading: true,
    person: null,
  };
  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ person: data.results[0], loading: false });
    console.log("user data", data);
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>Loading...</div>
        ) : (
          <>
            <h4>
              Person Name : {this.state.person.name.title}.
              {this.state.person.name.first}&nbsp;
              {this.state.person.name.last}
            </h4>
            <img src={this.state.person.picture.large} />
          </>
        )}
      </div>
    );
  }
}
