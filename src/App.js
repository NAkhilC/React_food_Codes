import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route,Link} from "react-router-dom"; 
import Search from './components/Search';
import CreateTodo from './components/Createtodo';
import Test from './components/Test';
import EnterCode from './components/EnterCode';
import fnv from './fnv.jpg'

function App() {
  return (
    <Router>
      <div className="container">  
      <h1>Welcome to Food codes</h1>
         {/* <nav className='navbar navbar-expand-lg navbar-dark bg-dark'> 
          <div className="collpase nav-collapse">
            <ul className="navbar-nav">  
            <li className="navbar-item">
                <Link to="/" className="nav-link" >Food codes</Link>
              </li>          
              <li className="navbar-item">
                <Link to="/test" className="nav-link">All codes</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create</Link>
              </li>
              <li className="navbar-item">
                <Link to="/edit/:id" className="nav-link">Search</Link>
              </li>
              <li className="navbar-item">
                <Link to="/edit/:id" className="nav-link">About Us</Link>
              </li>
              <li className="navbar-item" >
                <Link to="/edit/:id" className="nav-link" id="mname">Contact Us</Link>
              </li>
            </ul>
          </div>
         </nav> */}

<nav className="mb-1 navbar navbar-expand-lg navbar-dark bg-dark" style={{color:'white'}}>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
          <ul className="navbar-nav">           
              <li className="navbar-item">
                <Link to="/test" className="nav-link">Welcome To Food Codes</Link>
              </li>
         </ul>
         <ul className="navbar-nav ml-auto nav-flex-icons">
         <li className="navbar-item">
                <Link to="/test" className="nav-link">All codes</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create</Link>
              </li>
              <li className="navbar-item">
                <Link to="/Search" className="nav-link">Search</Link>
              </li>
              <li className="navbar-item">
                <Link to="/EnterCode" className="nav-link">Code Search</Link>
              </li>
              <li className="navbar-item" >
                <Link to="/edit/:id" className="nav-link">Contact Us</Link>
              </li>
         </ul>
  </div>
</nav>
      <Route path="/Search" component={Search}>
        
      </Route>
      <Route path="/create" component={CreateTodo}>

      </Route>
      <Route path="/Test" component={Test}>

      </Route>
      <Route path="/EnterCode" component={EnterCode}>

      </Route>
      </div>
    </Router>
   
  );
}

export default App;
