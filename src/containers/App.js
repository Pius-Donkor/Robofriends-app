import React, { Component } from "react";
import ClassList from "../components/ClassList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      seachFields: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }
  handleSearch = (e) => {
    this.setState({ seachFields: e.target.value });
  };

  render() {
    const { robots, seachFields } = this.state;
    const filteredRobo = robots.filter((robot) =>
      robot.name.toLocaleLowerCase().includes(seachFields)
    );

    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFrriends</h1>
        <SearchBox handleSearch={this.handleSearch} />
        <Scroll>
          <ErrorBoundry>
            <ClassList robots={filteredRobo} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
