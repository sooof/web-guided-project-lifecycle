
   
import React, { Component } from "react";
import { render } from 'react-dom'
import "./styles.scss"

import {people} from './people';

// console.log("people:  === ", people)

class App extends Component {
    constructor() {
        console.log("constructor Invoked!" )
        super();
        this.state = {
          friends: []
        }
      }
      componentDidMount(){
        console.log("componentDidMount CDM Invoked!" ) 
        // this.setState({friends:people}) 
        this.setState({
            ...this.state,
            friends:people
        })
      }

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
        {this.state.friends.map(friend => ( 
        <div key={friend.id}> {friend.first_name} </div>
        ))}

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