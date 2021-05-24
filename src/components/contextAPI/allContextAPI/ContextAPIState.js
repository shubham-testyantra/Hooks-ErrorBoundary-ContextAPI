import React from "react";

const Context = React.createContext();

class Provider extends React.Component {
  state = {
    name: "Nandhi Hills",
    status: "OPEN",
  };
  render() {
    return (
      <>
        <Context.Provider
          value={{
            state: this.value,
            changeStatus: () => {
              this.setState({ status: "CLOSED" });
            },
          }}
        >
          {this.props.Childern}
        </Context.Provider>
      </>
    );
  }
}

const Trial = () => {
  return (
    <>
      <Context.Consumer>
        {(contexts) => {
          return (
            <>
              <h2>Hill Name: {contexts.state.name}</h2>
              <h2>Resort Status: {contexts.state.status}</h2>

              <button onClick={contexts.changeStatus}>Click Me!</button>
            </>
          );
        }}
      </Context.Consumer>
    </>
  );
};

const Lift = () => {
  return <Trial />;
};

export default class ResortState extends React.Component {
  render() {
    return (
      <>
        <Provider>
          <Lift />
        </Provider>
      </>
    );
  }
}
