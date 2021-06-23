import React, {Component} from 'react';
import {Input} from 'reactstrap';

export default class SearchIndex extends Component {
  constructor(props){
  super(props);
  this.state = {
    things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'], 
    searchTerm:'',
    newThings:[]
    }
    }

  


changeHandler(event){
  this.setState({searchTerm: event.target.value,
    newThings: this.state.things.filter((results)=>
      results.includes(event.target.value))
  });
  
  }

 render() { 
   return(
     <div>
       <Input type = "text"placeholder='Search Here' value={this.state.searchTerm} onChange={(event) => this.changeHandler(event)}/>
       <h3>Results:</h3>
     <ResultsDisplay things = {this.state.things} otherThings ={this.state.newThings} search = {this.state.searchTerm}/>
    </div>)
 }
   
}

class ResultsDisplay extends Component{
    
  render(){
    let displayThings = this.props.search === '' ? this.props.things : this.props.otherThings;
    console.log(typeof this.props.search);
    return (
     <div>
        {       
        displayThings.map((thing) => {
          return <Display passingThings = {thing}/>;
    })} 
    </div>  
    )
  }
}

const Display = (props) =>{

  return (
    <div>
    <li>{props.passingThings}</li>
    </div>
  )
}


/** original code
 * import React from 'react';
import {Input} from 'reactstrap';
 
const SearchIndex extends Component() {
   this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
   }
 }

 function searchFunction() {
 }

 render() {
     <div>
       <Input placeholder='Search Here' />
       <h3>Results:</h3>
     </div>
 }

 
export SearchIndex;
 * 
 */
