import React from 'react';
import axios from 'axios';

export const getDogImages = (breed) => {
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
 