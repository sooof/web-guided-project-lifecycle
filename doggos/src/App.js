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
        dogImages: []
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
    render() {
        console.log(this.state.dogImages)
        return(<div>
            <h1>Dog Image Retriever v1.4</h1>
            <form>
                <input/>
                <button>Search</button>
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