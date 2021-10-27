import React from "react";

class AppClass extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: "Warren"
  //   };
  // }

    state = {
      name: "Warren"
    };
  componentDidMount(){
    console.log("CDM Invoked!" )
    // this.setState({friends:people})
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate Invoked!" )
    console.log('old props: ', prevProps);
    console.log('new props: ', this.props);

    console.log('old state: ', prevState);
    console.log('new state: ', this.state);
    if (this.state.name !== prevState.name){
      console.log("Our state CHANGE !" )
    }
  }

  handleNameButtonClick = (e) => {
  console.log("AppClass: Changing DOM")
    this.setState({
      ...this.state,
      name: "Allison"
    });
  };

  
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
