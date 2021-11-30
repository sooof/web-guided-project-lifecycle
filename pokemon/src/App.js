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
  state = {
    pokemon: [],
    isLoading: true
  }

  componentDidMount() {
    console.log("App: Component Has Mounted");
    setTimeout(()=> {
      this.setState({
        ...this.state,
        pokemon: data,
        isLoading: false
      });
    }, 3000);
  }

  render() {
    console.log("App: Component Has render");
    return (
      <div className="App">
        {/* <Pokemon pokemon={this.state.pokemon} /> */}
        {/* {this.state.pokemon.length === 0? <h1>Loading</h1> : <Pokemon pokemon={this.state.pokemon} />} */}

        {this.state.isLoading ? <h1>Loading</h1> : <Pokemon pokemon={this.state.pokemon} />}
      </div>
    );
  }
}

export default App;
