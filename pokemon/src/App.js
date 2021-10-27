import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     pokemon: data
  //   };
  // }

  // state = {
  //   pokemon: data
  // };

  state = {
    pokemon: []
  };
  componentDidMount() {
    console.log("App: Component Has Mounted");
    setTimeout(()=> {
      this.setState({
        ...this.state,
        pokemon: data
      });
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <Pokemon pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
