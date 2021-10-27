import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogImages: [
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_10263.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_10715.jpg",
        "https://images.dog.ceo/breeds/hound-walker/n02089867_1988.jpg"
        ]
    }

    render (){
        return(
            <div>
                <h1>Dog Pic Finder 3.2</h1>
                <form>
                    <input/>
                    <button>Fetch Dogs</button>
                </form>
                <div>
                    {
                        this.state.dogImages.map( (dogImage)=> (
                            <img src={dogImage} key={dogImage.id}/>
                        ))
                    }
                    {/* <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"/> */}
                </div>
            </div>
        )
    }
}
export default App;