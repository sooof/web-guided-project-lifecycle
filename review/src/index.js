import React, { Component } from "react";
import { render } from "react-dom";
import CitiesList from "./CitiesList";
import cities from "./cities";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cities: []
    };
  }

  componentDidMount() {
    // 'fetch' our cities data.
    console.log(cities);
    // set cities on state for use in CitiesList
    this.setState({ cities: cities.data });
  }
  // lets fill this in so we can have our cities.
  render() {
    return <CitiesList greeting="string" citiesProp={this.state.cities} />;
  }
}

render(<App />, document.getElementById("root"));
