import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogImages: [],
        input: ""
    }
    componentDidMount() {
        axios.get('https://dog.ceo/api/breed/husky/images')
            .then( resp=> {
                // console.log(resp.data);
                //console.log(resp.data.message  );
                this.setState({
                    ...this.state,
                    dogImages: resp.data.message
                });
            }).catch( err=>{
                console.log(err);
            });
    }

    handleChange = (e) => {
        //console.log("handleChangle" );
        this.setState({
            ...this.state,
            input: e.target.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        //1. Did we update dogImages?
        //2. Is that update tied to Chihuahuas?
        //3. If so, make a new axios call on huskies?
        
        console.log("State/Props Update");

        // if (prevState.dogImages !== this.state.dogImages) {
        //     console.log("DogImages Update");
        //     if (this.state.input === "chihuahua") {
        //         axios.get('https://dog.ceo/api/breed/husky/images')
        //             .then(resp=> {
        //                 this.setState({
        //                     ...this.state,
        //                     dogImages: resp.data.message
        //                 });
        //             })
        //             .catch(err=> {
        //                 console.log(err);
        //             })
        //     }
        // }

        if (this.state.input === "chihuahua") {
            this.setState({
                ...this.state,
                input: "husky"
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //hound  pug
        axios.get(`https://dog.ceo/api/breed/${this.state.input}/images`)
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
    }

    render (){
        console.log(this.state.input);
        return(
            <div>
                <h1>Dog Pic Finder 3.2</h1>
                <form >
                    <input onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Fetch Dogs</button>
                </form>
                <div>
                    {
                        this.state.dogImages.map( (dogImage)=> (
                            <img src={dogImage} key={dogImage.id}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default App;