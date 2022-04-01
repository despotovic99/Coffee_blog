import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "../styles/navbar.css";
import logo from "../images/logo3.png";
import {AiOutlineUser } from 'react-icons/ai';

 
function NavBar() {
  const [click, setClick] = useState(false);
  

  //const [button, setButton] = useState(true);
  
  const closeMobileMenu = () => setClick(false);

  /*const showButton = () => {
    if (window.innerWidth <= 600) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);*/

  return (
    <>
      <nav className="Navbar">
        <div className="Navbar-container">
        <div className='Navb-logo'  onClick={closeMobileMenu}>
          <Link to="/"><img src={logo} alt='' /> </Link>
        </div>   
         
          
          <ul className={click ? "Nav-menu active" : "Nav-menu"}>
            <li className="item">
              <Link to="/home" className="link" onClick={closeMobileMenu}>
                Početna
              </Link>
            </li>
            <li className="item">
              <Link to="/blogs" className="link" onClick={closeMobileMenu}>
                Članci
              </Link>
            </li>
            <li className="item">
              <Link to="/faq" className="link" onClick={closeMobileMenu}>
                FAQ
              </Link>
            </li>
            <li className="item">
              <Link to="/contact" className="link" onClick={closeMobileMenu}>
                Kontakt
              </Link>
            </li>
            <li className="item">
            <a href="/login" class='user' style={{color:"white"}}> <AiOutlineUser style={{marginTop:-10+"px",marginLeft: '2rem', width:40+"px",height:100+"px"}} /> </a>
            </li>
          </ul>
         
         
          
        </div>
      </nav>
    </>
  );
}

export default NavBar;