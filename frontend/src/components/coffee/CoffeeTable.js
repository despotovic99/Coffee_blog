import { useState } from "react";
import "../../styles/Entity.css";
import Footer from "../navigation/Footer";
import NavBar from "../navigation/NavBar";
import Modal from "react-modal";
import CoffeeInfo from "./CoffeeInfo";
import cb from "../../images/coffeeBean.jpg";

const CoffeeTable = () => {
  function deleteCoffee() {
    console.log("TODO obrisati kafu..");
  }
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [coffee] = useState([
    {
      id: 1,
      coffee_name: "Kafa 1",
      coffee_sort: "Kafa vrsta 1",
      country_origin: "Brazil",
      description: "rt",
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      coffee_name: "Kafa 2",
      coffee_sort: "Kafa vrsta 2",
      country_origin: "Brazil",
      description: "rt",
      user_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);

  return (
    <>

      <div className="coffeeTable">
        <div className="coffeeTableHeader">
          <h2>Kafe</h2>
          <button className="btnAddCoffee" value="Open" onClick={openModal}>
            Dodaj novu kafu
          </button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Nova kafa"
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
                <h2 className="modalTitle">Detalji o kafi</h2>
                <CoffeeInfo />
              </div>
              <div className="columnInfo">
                <img
                  src={cb}
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
              <td>Naziv</td>
              <td>Vrsta</td>
              <td>Poreklo</td>
              <td>Kratak opis</td>
              <td>Kreator</td>
              <td>Kreirano</td>
              <td>Promenjeno</td>
              <td>Obrisi</td>
              <td>Izmeni</td>
            </tr>
          </thead>
          <tbody id="tableBody">
            {coffee.map((k) => (
              <tr>
                <td>{k.coffee_name} </td>
                <td>{k.coffee_sort}</td>
                <td>{k.country_origin}</td>
                <td>{k.description}</td>
                <td>{k.user_id}</td>
                <td>{k.created_at.getDate()}</td>
                <td>{k.updated_at.getDate()}</td>
                <td>
                  <button className="btnDeleteCoffee" onClick={deleteCoffee}>
                    obrisi{" "}
                  </button>
                </td>
                <td>
                  <button
                    className="btnUpdateCoffee"
                    value="Open"
                    onClick={openModal}
                  >
                    izmeni
                  </button>

                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Detalji o kafi"
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
                        <h2 className="modalTitle">Detalji o kafi</h2>
                        <CoffeeInfo />
                      </div>
                      <div className="columnInfo">
                        <img
                          src={cb}
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

    </>
  );
};
export default CoffeeTable;
