import React from 'react';
import axios from 'axios';

class App extends React.Component {
    // state = {
    //     dogImages: [
    //         "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
    //         "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
    //         "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg",
    //         "https://images.dog.ceo/breeds/hound-afghan/n02088094_10263.jpg"
    //     ]
    // }
    state = {
        dogImages: [],
        breed: ""
    }

    componentDidMount() {
        axios.get('https://dog.ceo/api/breed/hound/images')
            .then(resp=> {
                this.setState({
                    ...this.state,
                    dogImages:resp.data.message
                });
            })
            .catch(err=> {
                console.log(err);
            })
    }

    handleClick = (e)=> {
        e.preventDefault();
        //Search for dogs
        //1. get user input into state
        console.log(this.state.breed);
        //2. capture submit
        //3. execute axios call based on user input
        axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images`)
            .then(resp=> {
                console.log(resp);
                this.setState({
                    ...this.state,
                    dogImages: resp.data.message
                })
            })
            .catch(err=> {
                console.log(err);
            })
        //4. change this.state.dogImages to response
    }
    handleChange = (e) => {
        this.setState({
            ...this.state,
            breed: e.target.value
        })
    }

    render() {
        console.log(this.state.dogImages)
        return(<div>
            <h1>Dog Image Retriever v1.4</h1>
            <form>
                <input onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Search</button>
            </form>
            <div id="dogImages">
                {
                    this.state.dogImages.map(dogImage => {
                        return(<img width="200" src={dogImage}/>);
                    })
                }
            </div>
        </div>);
    }
}
export default App;