import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "../../styles/Footer.css";
import { useState } from "react";

const emailList = [];
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    let value = { email };
    emailList.push(value);
    console.log(emailList);
  };

  return (
    <footer class="footer">
      <div class="containerFooter">
        <div class="rowFooter">
          <div class="footer-col">
            <h4>zajednica ljubitelja kafe</h4>
            <ul>
              <li>
                <a href="/home">pocetna</a>
              </li>
              <li>
                <a href="/faq">često postavljena pitanja</a>
              </li>
              <li>
                <a href="/contact">kontakt</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>personalizacija</h4>
            <ul>
              <li>
                <a href="/register">napravi nalog</a>
              </li>
              <li>
                <a href="/login">uloguj se</a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>zapratite nas</h4>
            <div class="social-links">
              <a href="https://www.facebook.com/">
                <FaFacebook class="fab fa-facebook-f" size={40} />
              </a>
              <a href="https://twitter.com/">
                <FaInstagram class="fab fa-twitter" size={40} />
              </a>
              <a href="https://www.instagram.com/">
                <FaTwitter class="fab fa-instagram" size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
