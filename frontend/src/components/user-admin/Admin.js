import "../../styles/Admin.css";
import {GiCoffeeBeans} from "react-icons/gi";
import {
    AiOutlineLogout,
    AiOutlineSearch,
} from "react-icons/ai";
import {FaRegComments} from "react-icons/fa";
import {FiUsers, FiUser} from "react-icons/fi";
import {MdOutlineArticle} from "react-icons/md";
import {Button} from "../pageEssentials/Button";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const Admin = () => {

    if (window.sessionStorage.getItem('user_type') !== 'admin' &&
        window.sessionStorage.getItem('user_type') !== 'post_manager') {

        window.location.href = '/';
    }

    const [statistics, setStatistics] = useState(null);
    useEffect(() => {
        if (statistics == null) {
            axios.get('http://localhost:8000/api/get-admin-statistics', {
                headers: {
                    'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token')
                }
            })
                .then((res) => {
                    console.log(res.data)
                    if (res.data.success) {
                        setStatistics(res.data.statistics)
                    }else{
                        window.alert('Cant get statistics!')
                    }
                }).catch((e) => {
            })
        }
    }, [statistics])

    return (
        <>

            <div className="container-Admin">
                <div className="navigation">
                    <ul>
                        <li>
                            <Link to="/home">
                <span className="icon">
                  {" "}
                    <GiCoffeeBeans size={20}/>
                </span>
                                <span className="title">Coffee Blog</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/coffees">
                <span className="icon">
                  <GiCoffeeBeans size={20}/>
                </span>
                                <span className="title">Kafe</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/users">
                <span className="icon">
                  <FiUsers size={20}/>
                </span>
                                <span className="title">Korisnici</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/posts">
                <span className="icon">
                  <MdOutlineArticle size={20}/>
                </span>
                                <span className="title">Postovi</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/categories">
                <span className="icon">
                  <FaRegComments size={20}/>
                </span>
                                <span className="title">Kategorije</span>
                            </Link>
                        </li>

                    </ul>
                </div>

                <div className="main">
                    <div className="topbar">
                        <div className="search">
                            <label>
                                <input type="text" placeholder="Pretraži"/>
                                <div className="srch">
                                    <AiOutlineSearch size={35}/>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="cardbox">
                        <div className="card">
                            <div>
                                <div className="numbers">{statistics!=null?statistics.posts:0}</div>
                                <div className="cardName">Broj postova</div>
                            </div>
                            <div className="iconBx">
                                <MdOutlineArticle size={30}/>
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <div className="numbers">{statistics!=null?statistics.comments:0}</div>
                                <div className="cardName">Broj komentara</div>
                            </div>
                            <div className="iconBx">
                                <FaRegComments size={30}/>
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <div className="numbers">{statistics!=null?statistics.users:0}</div>
                                <div className="cardName">Broj korisnika</div>
                            </div>
                            <div className="iconBx">
                                <FiUsers size={30}/>
                            </div>
                        </div>
                    </div>

                    <div className="details">
                        <div className="recentPosts">
                            <div className="cardHeader">
                                <h2>Poslednji postovi</h2>
                            </div>
                            <table>
                                <thead>
                                <tr>
                                    <td>Naslov</td>
                                    <td>Autor</td>
                                    <td>Datum</td>
                                    <td>Kratak opis</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Naslov1</td>
                                    <td>Autor1</td>
                                    <td>Datum1</td>
                                    <td>k1</td>
                                </tr>
                                <tr>
                                    <td>Naslov2</td>
                                    <td>Autor2</td>
                                    <td>Datum2</td>
                                    <td>k2</td>
                                </tr>
                                <tr>
                                    <td>Naslov3</td>
                                    <td>Autor3</td>
                                    <td>Datum3</td>
                                    <td>k3</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="recentCustumers">
                            <div className="cardHeader">
                                <h2>Poslednji ulogovani korisnici</h2>
                            </div>
                            <table>
                                <tbody>
                                <tr>
                                    <td width="60px">
                                        <div className="imgBx">
                                            <FiUser size={30}/>{" "}
                                        </div>
                                    </td>
                                    <td>
                                        <h4>
                                            Nemanja Despotovic
                                            <br/>
                                            <span>podatak1</span>
                                        </h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="60px">
                                        <div className="imgBx">
                                            {" "}
                                            <FiUser size={30}/>{" "}
                                        </div>
                                    </td>
                                    <td>
                                        <h4>
                                            Ana Korunovic <br/>
                                            <span>podatak2</span>
                                        </h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="60px">
                                        <div className="imgBx">
                                            <FiUser size={30}/>{" "}
                                        </div>
                                    </td>
                                    <td>
                                        <h4>
                                            Andjela Milovanovic
                                            <br/>
                                            <span>podatac3</span>
                                        </h4>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Admin;
