const bodyParser = require("body-parser");

const express= require('express');
const app=express();
const mongoose = require('mongoose');
const cors= require('cors');
const todoRoutes = express.Router();
const PORT = 4080;

let Todo= require('./todo.model');

app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/todos',{useNewUrlParser:true})
const connection = mongoose.connection;

connection.once('open',function()
{
    console.log("mongodb connection established successfully");
})
todoRoutes.route('/').get(function(req,res)
     {
    Todo.find(function(err,todos)
    {
        if(err)
        {
            console.log(err);
        }else{
            res.json(todos);
        }
    }).sort({'todo_desc':1});
});
// todoRoutes.route('/:id').get(function(req,res)
// {
//     let id= req.params.id;
//     Todo.findById(id,function(err,todo)
//     {
//         res.json(todo);
//     });
// });
todoRoutes.route('/:name').get(function(req,res)
{
    let todo_res= req.params.name;
    Todo.find({"todo_desc": todo_res},function(err,todos)
    {
        res.send(todos);
    });
});


todoRoutes.route('/add').post(function(req,res)
{
    let todo= new Todo(req.body);
    todo.save()
        .then(todo =>{
          res.status(200).json({'todo':"todo added sucessfully"});

        })
        .catch(err => {
            res.status(400).send('adding failed');
        })
});



app.use('/todos',todoRoutes);


app.listen(PORT,function()
{
    console.log("server is running now on " + PORT);
});
