import React, {Component} from 'react';



export default class ToDoIndex extends Component{
    constructor(props){
        super(props);
        this.state= {
            taskList:[],
            newTask: ''
                
    }
    this.addTask = this.addTask.bind(this)
    this.completeTask = this.completeTask.bind(this)
}

    addTask(event){
        event.preventDefault();
        this.setState({
            taskList:[...this.state.taskList, this.state.newTask]
            
            },() => {console.log(this.state.taskList)})
           ;
    }

    addChangeHandler(event){
        this.setState({
            newTask: event.target.value
        }       
        )
    }

   

   completeTask(indextoChange){
    console.log(indextoChange, this.state.taskList[indextoChange]);
        this.setState((prevState)=>({
            taskList: prevState.taskList.filter((tasks,index)=> indextoChange !== index)
        }))
   }
 


    
    render(){
        return(
            <div>
               <form onSubmit={this.addTask}>
                        <input type='text' value={this.state.newTask.taskName} onChange={(event)=> this.addChangeHandler(event)} />
                        <button type='submit'>Add Task</button>
                    </form>
                    <div>
                    <div>
                     <h2>ToDo List</h2>
                    <ul>
                    <TaskList tasks={this.state.taskList} toggle={this.completeTask}/>
                    </ul>
                    </div>
                    </div>
                </div>

           
        )
        

    }



}

class TaskList extends Component{
    render() {
        return(
            <div>
                {this.props.tasks.map((task, index) => {
                   return (
                    <Task passingTask={task} indextoChange={index} toggle={this.props.toggle}/>
                    )
                    }
                    
        )
    }
    </div>
        )
}
}

const Task = (props) => {
    console.log(props);
    
    return(
        
            <li key={props.indextoChange}><input type="checkbox" onClick={() => {props.toggle(props.indextoChange)}} />  {props.passingTask}</li>
        
    )
}
