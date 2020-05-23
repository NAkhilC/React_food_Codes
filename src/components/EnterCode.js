import React, { Component } from 'react';
import axios from 'axios'
const Todo = props =>(
    <tr>
        <td>{props.todo.todo_desc}</td>
      <td>{props.todo.todo_res}</td>
       <td>{props.todo.todo_pro}</td>
       <td><button type="button" className="btn btn-dark" style={{height:'40px', width:'100px',borderRadius:'0px 0px 0px 0px'}}>Delete</button></td>
    </tr>
)

class EnterCode extends Component {
    constructor(props) {
        super(props)
        this.onchangeTodoDes= this.onchangeTodoDes.bind(this);
        this.onchangeTodoRes= this.onchangeTodoRes.bind(this);
        this.onSub=this.onSub.bind(this);
        this.state = {
             todo_desc: " ",
             todo_res: " ",
             todo_com: false,
             flist: [],
        };
    }
    onchangeTodoDes(e)
    {
        this.setState(
            {
                todo_desc:e.target.value
            }
        )
    }
    onchangeTodoRes(e)
    {
        this.setState(
            {
                todo_res:e.target.value
            }
        )
    }
    onSub(e)
    { 
        e.preventDefault();
        console.log("first Search form");
        const name =
        {
            name : this.state.todo_desc
        }
        axios.get(`http://127.0.0.1:4080/todos/${this.state.todo_desc.trim()}`)
        .then(res => {
            this.setState({flist : res.data});
        })
    }


    todoList()
    {
        return this.state.flist.map(function(currentTodo,i)
        {
            return <Todo todo={currentTodo} key={2} />
        })
    }
    render() {
        let comp;

        if(this.state.flist != 0)
        {
        comp=  <thead>
        <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Type</th>
            <th>Delete</th>
        </tr>
    </thead>
        }
        return (
  
           <div className="container">
              <div style={{display:'flex'}}>
                    <div>
                       <form onSubmit={this.onSub}>
                          <h3 style={{ marginTop:'30px',marginBottom:'20px'}}>Search By name</h3>
                          <div style={{display:'flex'}}>
                          <label>Name</label>
                      <input type="text" className="form-control" 
                      onChange={this.onchangeTodoDes}
                       value={this.state.todo_desc} style={{marginLeft:'20px'}}>
                      </input>
                          <input type="submit" value="Search" className="btn btn-primary" style={{marginLeft:'10px'}} /> 
                          </div>
                       </form>
                    </div>
                    <div>
                        {/* <form onSubmit={this.onSub}>
                        <h3 style={{ marginTop:'30px',marginBottom:'20px'}}>Search By Code</h3>
                        <div className="form-group" style={{display:'flex'}}>
                          <label>Code</label>
                        <input type="text" className="form-control" 
                         onChange={this.onchangeTodoRes}
                         value={this.state.todo_res} style={{marginLeft:'10px'}}>
                        </input>
                       <input type="submit" value="Search" className="btn btn-primary" style={{marginLeft:'10px'}} /> 
                 </div>
                        </form> */}
                    </div>
              </div>
             
              <table className="table table-striped" align="center" style={{width:'70%', marginTop:'20px'}}>
              {comp}
                   <tbody>
                       {this.todoList()}                 
                   </tbody>
               </table>
           </div>

        
        )
    }
}

export default EnterCode
