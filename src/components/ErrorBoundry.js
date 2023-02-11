import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error, message) {
    this.setState({ hasError: true });
  }
  render() {
    return this.state.hasError ? (
      <h1>Oooops app could not work</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundry;
