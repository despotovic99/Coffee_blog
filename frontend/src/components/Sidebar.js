import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import sb from  "../images/sidebar.jpg";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Button } from "./Button";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="sidebarTitle">O NAMA</div>
        <img
          src={sb}
          alt=""
        />
        <p>
          Zajednica ljubitelja kafe je mesto na kome možete pronaći novosti i zanimljivosti o kafi.
          Korisnici mogu da dele svoja iskustva i postavljaju svoje članke.
        </p>
      </div>
      <div class="sidebarItem">
       <div className="sidebarTitle" >PRETRAGA</div>
            <div class="input-group">
                  <input class="inputPretraga" type="text" placeholder="Unesite pojam za pretragu..." aria-label="Unesite pojam za pretragu..." aria-describedby="button-search" />
                  <Button
          route="\home"
          className="btnPretraga"
          buttonStyle="basic"
          buttonSize="large"
          text="Pretrazi!"
         >
        </Button>
                  
            </div>
      </div>
                 
      <div className="sidebarItem">
        <div className="sidebarTitle" >KATEGORIJE</div>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <a href="#">
              Recepti
            </a>
          </li>
          <li className="sidebarListItem">
          <a href="#" >
          Zanimljivosti
        </a>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">ZAPRATITE NAS</div>
        <div className="sidebarSocial">
        <a href="#"><FaFacebook class="fab fa-facebook-f" size={30} /></a>
                        <a href="#"><FaInstagram class="fab fa-twitter"  size={30}/></a>
                        <a href="#"><FaTwitter class="fab fa-instagram" size={30}/></a>
        </div>
      </div>
    </div>
  );
}