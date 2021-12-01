
   
import React, { Component } from "react";
import { render } from 'react-dom'


class App extends Component {


  render() {
    console.log("Render Invoked ")
    return (
      <div className="App">
        <h1> Welcome to Friends! </h1>
        <p>
          The purpose of this follow along assignment is to give you access to
          more 'at bats' with ReactJS and to talk about the pieces of the{" "}
          <strong>React Component LifeCycle</strong> along the way.
        </p>

      </div>
    );
  }
}




const rootElement = document.getElementById("root");

render(
  //
  // React.createElement(App), 
  <App />,
  rootElement
  );