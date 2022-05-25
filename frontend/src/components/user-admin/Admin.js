import "../../styles/Admin.css";
import Navbar from "../navigation/NavBar";
import { GiCoffeeBeans } from "react-icons/gi";
import {
  AiOutlineLogout,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { BiStats } from "react-icons/bi";
import { FiUsers, FiUser } from "react-icons/fi";
import { MdOutlineArticle } from "react-icons/md";
import { Button } from "../pageEssentials/Button";

const Admin = () => {
  return (
    <>
      <Navbar />
      <div className="container-Admin">
        <div className="navigation">
          <ul>
            <li>
              <a href="/home">
                <span className="icon">
                  {" "}
                  <GiCoffeeBeans size={20} />
                </span>
                <span className="title">Coffee Blog</span>
              </a>
            </li>
            <li>
              <a href="/coffee">
                <span className="icon">
                  <GiCoffeeBeans size={20} />
                </span>
                <span className="title">Kafe</span>
              </a>
            </li>
            <li>
              <a href="/users">
                <span className="icon">
                  <FiUsers size={20} />
                </span>
                <span className="title">Korisnici</span>
              </a>
            </li>
            <li>
              <a href="/posts">
                <span className="icon">
                  <MdOutlineArticle size={20} />
                </span>
                <span className="title">Postovi</span>
              </a>
            </li>
            <li>
              <a href="/categories">
                <span className="icon">
                  <FaRegComments size={20} />
                </span>
                <span className="title">Kategorije</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <AiOutlineLogout size={20} />
                </span>
                <span className="title">Izloguj se</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="main">
          <div className="topbar">
            <div className="search">
              <label>
                <input type="text" placeholder="Pretraži" />
                <div className="srch">
                  <AiOutlineSearch size={35} />
                </div>
              </label>
            </div>
          </div>

          <div className="cardbox">
            <div className="card">
              <div>
                <div className="numbers"> 500</div>
                <div className="cardName">Postova</div>
              </div>
              <div className="iconBx">
                <MdOutlineArticle size={30} />
              </div>
            </div>
            <div className="card">
              <div>
                <div className="numbers"> 80</div>
                <div className="cardName">Komentara</div>
              </div>
              <div className="iconBx">
                <FaRegComments size={30} />
              </div>
            </div>
            <div className="card">
              <div>
                <div className="numbers"> 284</div>
                <div className="cardName">Korisnika</div>
              </div>
              <div className="iconBx">
                <FiUsers size={30} />
              </div>
            </div>
          </div>

          <div className="details">
            <div className="recentPosts">
              <div className="cardHeader">
                <h2>Poslednji postovi</h2>
                <div className="btn-view">
                  {" "}
                  <Button
                    className="btnViewAllPosts"
                    buttonStyle="color"
                    buttonSize="small"
                    text="Pogledaj sve"
                    route="/posts"
                  ></Button>
                </div>
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
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <FiUser size={30} />{" "}
                    </div>
                  </td>
                  <td>
                    <h4>
                      Nemanja Despotovic
                      <br />
                      <span>podatak1</span>
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      {" "}
                      <FiUser size={30} />{" "}
                    </div>
                  </td>
                  <td>
                    <h4>
                      Ana Korunovic <br />
                      <span>podatak2</span>
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <FiUser size={30} />{" "}
                    </div>
                  </td>
                  <td>
                    <h4>
                      Andjela Milovanovic
                      <br />
                      <span>podatac3</span>
                    </h4>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Admin;
