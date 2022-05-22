import { useState } from "react";
import "../../styles/Entity.css";
import Footer from "../navigation/Footer";
import NavBar from "../navigation/NavBar";
import Modal from "react-modal";
import UserInfo from "./UserInfo";
import CoffeeInfo from "../coffee/CoffeeInfo";
import user from "../../images/user.jpg";

const UsersTable = () => {
  function deleteCoffee() {
    console.log("TODO obrisati user-a.");
  }
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [users] = useState([
    {
      id: 1,
      name: "Nemanja",
      lastname: "Despotovic",
      email: "nemanja@gmail.com",
      password: "nemanja",
      user_role_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: "Ana",
      lastname: "Korunovic",
      email: "ana@gmail.com",
      password: "ana",
      user_role_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);

  return (
    <>
      <NavBar></NavBar>
      <div class="coffeeTable">
        <div class="coffeeTableHeader">
          <h2>Korisnici</h2>
          <button class="btnAddCoffee" value="Open" onClick={openModal}>
            Dodaj novog korisnika
          </button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Nov korisnik"
          >
            <div className="modalContent">
              <div className="columnInfo">
                <button
                  onClick={closeModal}
                  id="radius"
                  className="btnUpdateCoffee"
                >
                  Zatvori
                </button>
                <h2 className="modalTitle">Detalji o korisniku</h2>
                <UserInfo />
              </div>
              <div className="columnInfo">
                <img
                  src={user}
                  alt=""
                  style={{
                    width: "600px",
                    height: "480px",
                    margin: "10px",
                    borderRadius: "1em",
                  }}
                />
              </div>
            </div>
          </Modal>
        </div>

        <table className="table">
          <thead>
            <tr id="tableCol">
              <td>Ime</td>
              <td>Prezime</td>
              <td>Email</td>
              <td>Sifra</td>
              <td>Korisnicka uloga</td>
              <td>Kreirano</td>
              <td>Promenjeno</td>
              <td>Obrisi</td>
              <td>Izmeni</td>
            </tr>
          </thead>
          <tbody id="tableBody">
            {users.map((u) => (
              <tr>
                <td>{u.name} </td>
                <td>{u.lastname}</td>
                <td>{u.email}</td>
                <td>{u.password}</td>
                <td>{u.user_role_id}</td>
                <td>{u.created_at.getDate()}</td>
                <td>{u.updated_at.getDate()}</td>
                <td>
                  <button class="btnDeleteCoffee" onClick={deleteCoffee}>
                    obrisi{" "}
                  </button>
                </td>
                <td>
                  <button
                    class="btnUpdateCoffee"
                    value="Open"
                    onClick={openModal}
                  >
                    izmeni
                  </button>

                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Detalji o koriniku"
                  >
                    <div className="modalContent">
                      <div className="columnInfo">
                        <button
                          onClick={closeModal}
                          id="radius"
                          className="btnUpdateCoffee"
                        >
                          Zatvori
                        </button>
                        <h2 className="modalTitle">Detalji o korisniku</h2>
                        <UserInfo />
                      </div>
                      <div className="columnInfo">
                        <img
                          src={user}
                          alt=""
                          style={{
                            width: "600px",
                            height: "480px",
                            margin: "10px",
                            borderRadius: "1em",
                          }}
                        />
                      </div>
                    </div>
                  </Modal>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </>
  );
};
export default UsersTable;
