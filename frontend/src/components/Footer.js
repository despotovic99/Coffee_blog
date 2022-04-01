import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import {useState} from "react";
import { Button } from "./Button";


const emailList = [];
const Footer = () => {
    
    const [email,setEmail]=useState('');
    
    const handleClick = (e) => {
        e.preventDefault();
        let value={email};
        emailList.push(value);
        console.log(emailList);
        
    }
    

    return (
      
        
        
        <footer class="footer">
        <div class="containerFooter">
            <div class="rowFooter">
                <div class="footer-col">
                    <h4>zajednica ljubitelja kafe</h4>
                    <ul>
                        <li><a href="#">o nama</a></li>
                        <li><a href="#">članci</a></li>
                        <li><a href="#">recepti</a></li>
                        <li><a href="#">zanimljivosti</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>personalizacija</h4>
                    <ul>
                        <li><a href="#">napravi nalog</a></li>
                        <li><a href="#">uloguj se</a></li>
                        <li><a href="#">postavi članak</a></li>
                        <li><a href="#">pregled aktivnosti</a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h4>zapratite nas</h4>
                    <div class="social-links">
                        
                        <a href="#"><FaFacebook class="fab fa-facebook-f" size={40}/></a>
                        <a href="#"><FaInstagram class="fab fa-twitter"  size={40}/></a>
                        <a href="#"><FaTwitter class="fab fa-instagram" size={40}/></a>
                    </div>
                </div>
            </div>
        </div>
   </footer>
 
    )
}

export default Footer