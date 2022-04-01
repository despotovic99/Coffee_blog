import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Posts from "../components/SelectedPosts.js";
import Galery from "../components/Galery.js";
import "../styles/Start.css";

const Home= () => {
  return (
    
    <>
    
    <Navbar/> 
    <Galery/>
    
    <Posts />
    
    <Footer/>
  </>


     
  );
}

export default Home;