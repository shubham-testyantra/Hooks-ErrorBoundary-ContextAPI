import React from "react";

//Step 3: Data Component with Parameters
const DataComponent = (ComposedComponent, url) =>
  //Step 2: Data Component
  class DataComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
        loading: false,
        loaded: false,
      };
    }
    componentDidMount() {
      //load the data
      this.setState({ loading: true });
      fetch(url)
        .then((response) => response.json)
        .then((data) => this.setState({ loading: false, loaded: true, data }));
    }

    render() {
      return (
        <>
          {this.state.loaded ? (
            <ComposedComponent {...this.state} {...this.props} />
          ) : (
            <div>Please wait the data is loading...</div>
          )}
        </>
      );
    }
  };

// Step 1: Presentation Component i.e Composed Component
const PeopleList = ({ data }) => {
  <ol>
    {data.results.map((person, index) => {
      //destructuring the data values
      const { first, last } = person.name;
      return (
        <li key={index}>
          {first}
          {last}
        </li>
      );
    })}
  </ol>;
};

//PeopleList: Composed Component
//https://randomuser.me/api?results=10 is url

//Step 4: DataComponent is HOC
//Random users new components
const RandomUsers = DataComponent(
  PeopleList,
  "https://randomuser.me/api?results=10"
);
export default RandomUsers;
