import React, {Component} from 'react';
import {Button} from 'reactstrap';

export default class DogIndex extends Component{
    constructor(props){
        super(props);
            this.state = {
                image: ''
            }
        
    }
    fetchImage(){

        fetch('https://dog.ceo/api/breeds/image/random')
        .then (res => res.json())
        .then(result => {
            this.setState({image: result.message})
        })
        .catch(err => console.log (err))}
    
    componentDidMount(){
        this.fetchImage()
    }

    

    render() {
        return(
        <div>
            <Button onClick= {()=>this.fetchImage()}>See another Good Boy!</Button>
            <img src={this.state.image} alt="doggo"/>
        </div>)
    }
   
    
    
}

