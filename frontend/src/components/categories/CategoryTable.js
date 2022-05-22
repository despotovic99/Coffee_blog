import { useState } from "react";
import "../../styles/Entity.css";
import Footer from "../navigation/Footer";
import NavBar from "../navigation/NavBar";
import Modal from "react-modal";
import CategoryInfo from "./CategoryInfo";
import cb from "../../images/coffeeBean.jpg";

const CategoryTable = () => {
  function deleteCategory() {
    console.log("TODO obrisati kategoriju..");
  }
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [categories] = useState([
    {
      id: 1,
      name: "kategorija 1",
      slug: "kat 1",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: "kategorija 2",
      slug: "kat 2",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);

  return (
    <>
      <NavBar></NavBar>
      <div class="coffeeTable">
        <div class="coffeeTableHeader">
          <h2>Kategorije</h2>
          <button class="btnAddCoffee" value="Open" onClick={openModal}>
            Dodaj novu kategoriju
          </button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Nova kategorija"
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
                <h2 className="modalTitle">Detalji o kategoriji</h2>
                <CategoryInfo />
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
              <td>Skracenica</td>
              <td>Kreirano</td>
              <td>Promenjeno</td>
              <td>Obrisi</td>
              <td>Izmeni</td>
            </tr>
          </thead>
          <tbody id="tableBody">
            {categories.map((k) => (
              <tr>
                <td>{k.name} </td>
                <td>{k.slug}</td>
                <td>{k.created_at.getDate()}</td>
                <td>{k.updated_at.getDate()}</td>
                <td>
                  <button class="btnDeleteCoffee" onClick={deleteCategory}>
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
                    contentLabel="Detalji o kategoriji"
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
                        <h2 className="modalTitle">Detalji o kategoriji</h2>
                        <CategoryInfo />
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
      <Footer></Footer>
    </>
  );
};
export default CategoryTable;
