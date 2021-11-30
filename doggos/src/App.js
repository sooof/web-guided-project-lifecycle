import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogImages: [
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg",
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_10263.jpg"
        ]
    }
    render() {
        console.log(this.state.dogImages)
        return(<div>
            <h1>Dog Image Retriever v1.4</h1>
            <form>
                <input/>
                <button>Search</button>
            </form>
            <div id="dogImages">
                <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"/>
                <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"/>
                <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"/>
                <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"/>
            </div>
        </div>);
    }
}
export default App;