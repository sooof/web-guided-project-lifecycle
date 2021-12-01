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

    componentDidMount(prevProps, prevState) {
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
    componentDidUpdate(prevProps, prevState) {
        console.log("Props are updating")
        // console.log('old state: ', prevState);
        // if(prevState.dogImages !== this.state.dogImages){
        //     console.log("Changes to dogImages")
        //     if(this.state.breed === "chihuahua"){
        //         axios.get('https://dog.ceo/api/breed/husky/images')
        //         .then(resp=> {
        //             this.setState({
        //                 ...this.state,
        //                 dogImages:resp.data.message,
        //                 breed: "husky"
        //             });
        //         })
        //         .catch(err=> {
        //             console.log(err);
        //         });
            
        //     }
        // }
        console.log("changes state ", this.state);
        // if (this.state.breed === "chihuahua") {
        //     this.setState({
        //         ...this.state,
        //         breed: "husky"
        //     })
        // }
    }
    handleClick = (e)=> {
        e.preventDefault();
        //Search for dogs
        //1. get user input into state
        // console.log(this.state.breed);
        //2. capture submit
        //3. execute axios call based on user input
        axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images`)
            .then(resp=> {
                // console.log(resp);
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
        // axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images`)
        // .then(resp=> {
        //     this.setState({
        //         ...this.state,
        //         dogImages: resp.data.message,
        //         // breed: e.target.value
        //     })
        // })
        // .catch(err=> {
        //     console.log(err);
        // }) 
        this.setState({
            ...this.state,
            breed: e.target.value
        })
    }

    render() {
        // console.log(this.state.dogImages)
        return(<div>
            <h1>Dog Image Retriever v1.4</h1>
            <form>
                <input value={this.state.value} onChange={this.handleChange}/>
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