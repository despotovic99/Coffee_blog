import React from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

import Faq from "./routes/Faq";
import Contact from "./routes/Contact";
import Start from "./components/Start";
import Home from "./routes/Home";
import Blogs from "./routes/Blogs";
import SingleBP from "./routes/SinglePost";
import Login from "./components/Login";
import Register from "./components/Register";
import AddPost from "./components/AddPost";
import Admin from "./components/Admin";
import "./styles/App.css";



function App() {
   
  return (
    < >
      <Router>
      <Routes> 
      <Route path='/' element={<Start />} />
      <Route path='/home' element={<Home />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/singleBP' element={<SingleBP/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/addPost' element={<AddPost/>} />
      <Route path='/admin' element={<Admin/>} />
      </Routes> 
      </Router>
    </>
  );
}

export default App;