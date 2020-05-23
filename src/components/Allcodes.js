import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../App.css'
const Todo = props =>(
    <tr>
        <td>{props.todo.todo_des}</td>
      <td>{props.todo.todo_res}</td>
       <td>{props.todo.todo_pro}</td>
    </tr>
)
class Todolist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos:[]
        };
    }

    componentDidMount()
    {
        axios.get('http://127.0.0.1:4080/todos/')
        .then(response=> {
            this.setState({
                todos:response.data
            }) })
        .catch(function(error)
        {
            console.log(error);
        })
        
        
    }

    todoList()
    {
        return this.state.todos.map(function(currentTodo,i)
        {
            return <Todo todo={currentTodo} key={1} />
        })
    }
    
    render() {
        return (
            <div className="container">
               <table className="t1" >
                   <thead>
                       <tr>
                           <th>Name</th>
                           <th>Code</th>
                           <th>Type</th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.todoList()}
                   </tbody>
               </table>
               hihih
            </div>
        )
    }
}

export default Todolist
