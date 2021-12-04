import React from 'react';
import axios from 'axios';

const getDogImages = (breed) => {
   return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
   .then(resp=> {
    // this.setState({
    //     ...this.state,
    //     dogImages:resp.data.message
    // });
    console.log("frist 1", resp)
    return (resp.data)
    })
    .then(data=>{
        console.log("second 2", data)
        return (data.message)
    })
    .then(images => {
        console.log("last 1", images)
        return (images)
    })
    .catch(err=> {
        console.log(err);
    })
}

class App extends React.Component {
    state = {
        dogImages: [],
        breed: "pug"
    }


    componentDidMount(prevProps, prevState) {
        getDogImages(this.state.breed)
        // axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images`)
            .then(dagImage => {
                console.log("dogImage ", dagImage)
                this.setState({
                    ...this.state,
                    dogImages: dagImage
                    // dogImages:resp.data.message
                });
            })
            .catch(err=> {
                console.log(err);
            })
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log("Props are updating")
        // console.log('old state: ', prevState);
        if(prevState.dogImages !== this.state.dogImages){
            console.log("componentDidUpdate: Changes to dogImages this.state.breed=", this.state.breed)
            if(this.state.breed === "chihuahua"){
                console.log("In side")
                getDogImages("husky")
                .then(dagImage => {
                    console.log("dogImage ", dagImage)
                    this.setState({
                        ...this.state,
                        dogImages: dagImage
                        // dogImages:resp.data.message
                    });
                })
                .catch(err=> {
                    console.log(err);
                })
            }
        }
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
        getDogImages(this.state.breed)
        .then(dagImage => {
            console.log("dogImage ", dagImage)
            this.setState({
                ...this.state,
                dogImages: dagImage
                // dogImages:resp.data.message
            });
        })
        .catch(err=> {
            console.log(err);
        })
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