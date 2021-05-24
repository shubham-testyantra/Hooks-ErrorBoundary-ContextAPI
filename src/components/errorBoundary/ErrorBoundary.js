import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Eror : ", error);
    console.log("Eror Info : ", errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!!</h1>;
    } else {
      return this.props.children;
    }
  }
}
