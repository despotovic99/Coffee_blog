import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../images/logo3.png";
import {AiOutlineUser} from 'react-icons/ai';
import axios from "axios";


function NavBar() {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);

    function logoutUser(e) {
        e.preventDefault()
        axios.post('http://localhost:8000/api/logout', {}, {
            headers: {
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token')
            }
        })
            .then((res) => {
                console.log(res.data)
                if (res.data.success) {
                    alert(res.data.message)
                    window.sessionStorage.clear()
                    window.location.reload()
                }
            }).catch((e) => {
            console.log(e)
        })
    }

    return (<>
        <nav className="Navbar">
            <div className="Navbar-container">
                <div className='Navb-logo' onClick={closeMobileMenu}>
                    <Link to="/"><img src={logo} alt=''/></Link>
                </div>


                <ul className={click ? "Nav-menu active" : "Nav-menu"}>
                    {(window.sessionStorage.getItem('user_type') === 'admin' ||
                        window.sessionStorage.getItem('user_type') === 'post_manager') ?
                        <li className="item">
                            <Link to="/admin" className="link" onClick={closeMobileMenu}>
                                Admin
                            </Link>
                        </li> : <></>}
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
                        {window.sessionStorage.getItem('auth_token') == null ?
                            <Link to="/login" className='user' style={{color: "white"}}> <AiOutlineUser style={{
                                marginTop: -10 + "px", marginLeft: '2rem', width: 40 + "px", height: 100 + "px"
                            }}/> </Link> : <button onClick={logoutUser}>Odjavi se</button>}

                    </li>
                </ul>


            </div>
        </nav>
    </>);
}

export default NavBar;