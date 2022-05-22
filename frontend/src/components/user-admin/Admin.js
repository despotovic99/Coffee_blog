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
      <div class="container-Admin">
        <div class="navigation">
          <ul>
            <li>
              <a href="/home">
                <span class="icon">
                  {" "}
                  <GiCoffeeBeans size={20} />
                </span>
                <span class="title">Coffee Blog</span>
              </a>
            </li>
            <li>
              <a href="/coffee">
                <span class="icon">
                  <GiCoffeeBeans size={20} />
                </span>
                <span class="title">Kafe</span>
              </a>
            </li>
            <li>
              <a href="/users">
                <span class="icon">
                  <FiUsers size={20} />
                </span>
                <span class="title">Korisnici</span>
              </a>
            </li>
            <li>
              <a href="/posts">
                <span class="icon">
                  <MdOutlineArticle size={20} />
                </span>
                <span class="title">Postovi</span>
              </a>
            </li>
            <li>
              <a href="/categories">
                <span class="icon">
                  <FaRegComments size={20} />
                </span>
                <span class="title">Kategorije</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span class="icon">
                  <AiOutlineLogout size={20} />
                </span>
                <span class="title">Izloguj se</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="main">
          <div class="topbar">
            <div class="search">
              <label>
                <input type="text" placeholder="Pretraži" />
                <div class="srch">
                  <AiOutlineSearch size={35} />
                </div>
              </label>
            </div>
          </div>

          <div class="cardbox">
            <div class="card">
              <div>
                <div class="numbers"> 500</div>
                <div class="cardName">Postova</div>
              </div>
              <div class="iconBx">
                <MdOutlineArticle size={30} />
              </div>
            </div>
            <div class="card">
              <div>
                <div class="numbers"> 80</div>
                <div class="cardName">Komentara</div>
              </div>
              <div class="iconBx">
                <FaRegComments size={30} />
              </div>
            </div>
            <div class="card">
              <div>
                <div class="numbers"> 284</div>
                <div class="cardName">Korisnika</div>
              </div>
              <div class="iconBx">
                <FiUsers size={30} />
              </div>
            </div>
          </div>

          <div class="details">
            <div class="recentPosts">
              <div class="cardHeader">
                <h2>Poslednji postovi</h2>
                <div class="btn-view">
                  {" "}
                  <Button
                    class="btnViewAllPosts"
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
            <div class="recentCustumers">
              <div class="cardHeader">
                <h2>Poslednji ulogovani korisnici</h2>
              </div>
              <table>
                <tr>
                  <td width="60px">
                    <div class="imgBx">
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
                    <div class="imgBx">
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
                    <div class="imgBx">
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
