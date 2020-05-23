import React, { Component } from 'react'
import axios from 'axios'
 class Createtodo extends Component {
     constructor(props) {
         super(props)
         this.onchangeTodoDes= this.onchangeTodoDes.bind(this);
         this.onchangeTodoRes= this.onchangeTodoRes.bind(this);
         this.onchangeTodoPro= this.onchangeTodoPro.bind(this);
         this.onSub=this.onSub.bind(this);
         this.state = {
              todo_desc: " ",
              todo_res: " ",
              todo_pro:" ",
              todo_com: false
         }
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
     onchangeTodoPro(e)
     {
         this.setState(
             {
                 todo_pro:e.target.value
             }
         )
     }
     onSub(e)
     {
       e.preventDefault();  
       console.log("first info form");
       console.log(this.state.todo_desc +"");
       console.log(this.state.todo_res +"");
       console.log(this.state.todo_pro +"");

       const newTodo = {
           todo_desc : this.state.todo_desc.trim(),
           todo_res : this.state.todo_res,
           todo_pro: this.state.todo_pro,
           todo_com:this.state.todo_com
       }
       if(this.state.todo_desc != 0 && this.state.todo_res !=0 && this.state.todo_pro != 0)
       {
        axios.post('http://127.0.0.1:4080/todos/add',newTodo)
        .then(res => console.log(res.data));
       }
       else{
           alert("Some item values are missing!")
       }

   

       this.setState(
           {
            todo_desc: " ",
            todo_res: " ",
            todo_pro:" ",
            todo_com: false
           }
       )
     }

     
    render() {
        return (
            <div className="container" >
               <h3 style={{textAlign:'center', marginTop:'30px',marginBottom:'20px'}}>Insert new Record</h3>
               <form onSubmit={this.onSub}>
                  <div className="form-group">
                      <label>Name</label>
                      <input type="text" className="form-control" 
                      onChange={this.onchangeTodoDes}
                       value={this.state.todo_desc}>
                      </input>
                  </div>
                  <div className="form-group">
                      <label>Code</label>
                      <input type="text" className="form-control" 
                      onChange={this.onchangeTodoRes}
                       value={this.state.todo_res}>
                      </input>
                  </div>
                 <div className="form-group">
                     <div className="form-check form-check-inline">
                           <input className="form-check-input"
                           type="radio"
                           name="Fruits"
                           id="fruits"
                           value="fruits"
                            checked={this.state.todo_pro==='fruits'}
                                onChange={this.onchangeTodoPro} >
                          </input>
                          <label className="form-check-label">Fruit</label>
                      </div>
                      <div className="form-check form-check-inline">
                           <input className="form-check-input"
                           type="radio"
                           name="Veg"
                           id="Veg"
                           value="Vegetables"
                            checked={this.state.todo_pro==='Vegetables'}
                                onChange={this.onchangeTodoPro} >
                          </input>
                          <label className="form-check-label">Vegetables</label>
                      </div>
                      <div className="form-check form-check-inline">
                           <input className="form-check-input"
                           type="radio"
                           name="Other"
                           id="Other"
                           value="Other"
                            checked={this.state.todo_pro==='Other'}
                                onChange={this.onchangeTodoPro} >
                          </input>
                          <label className="form-check-label">Other</label>
                      </div>
                 </div>
                 <div className="form-group">
                     <input type="submit" value="Add Item" className="btn btn-primary" /> 
                 </div>
               </form>
            </div>
        )
    }
}

export default Createtodo
