import React from "react";

class AppClass extends React.Component {
  constructor() {
    console.log("Appclass: Setup State" )
    super();
    this.state = {
      name: "Warren"
    };
  }

 

  handleNameButtonClick = (e) => {
    console.log("Appclass: Change State" )
    this.setState({
      ...this.state,
      name: "Allison"
    });
  };

  componentDidMount(){
    console.log("Appclass: Component has mount !!! " )
    // console.log("CDM Invoked!" )
    // this.setState({friends:people})
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate Invoked!" )
    // console.log('old props: ', prevProps);
    // console.log('new props: ', this.props);

    // console.log('old state: ', prevState);
    // console.log('new state: ', this.state);
    if (this.state.name !== prevState.name){
      console.log("Our state CHANGE !" )
    }
  }

  
  render() {
    console.log("AppClass: In Render DOM")
    return (
      <div>
        <h1>Hello {this.state.name}.</h1>
        <button onClick={this.handleNameButtonClick}>MAKE IS ALLISON</button>
      </div>
    );
  }
}

export default AppClass;
