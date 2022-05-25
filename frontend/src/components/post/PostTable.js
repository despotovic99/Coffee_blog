import { useState } from "react";
import "../../styles/Entity.css";
import Footer from "../navigation/Footer";
import NavBar from "../navigation/NavBar";
import Modal from "react-modal";
import p1 from "../../images/post1.jpg";
import p2 from "../../images/post2.jpg";
import AddPost from "./AddPost";
import SingleBP from "./SingleBP";

const PostTable = () => {
  function deletePost() {
    console.log("TODO obrisati post.");
  }
  const [modalAddIsOpen, setAddIsOpen] = useState(false);
  const [modalUpdateIsOpen, setUpdateIsOpen] = useState(false);
  const [modalViewIsOpen, setViewIsOpen] = useState(false);

  function openModalAdd() {
    setAddIsOpen(true);
  }
  function openModalUpdate() {
    setUpdateIsOpen(true);
  }
  function openModalView() {
    setViewIsOpen(true);
  }

  function closeModalAdd() {
    setAddIsOpen(false);
  }
  function closeModalUpdate() {
    setUpdateIsOpen(false);
  }
  function closeModalView() {
    setViewIsOpen(false);
  }

  const [posts] = useState([
    {
      id: 1,
      title: "Kako do savrsene kafe?",
      post_content:
        "Država - Guatemala Farma  La senada Note crvena trešnja,konjak,džem borovnice,intezivna Regija Acatenango,Chimaltenango \n Proizvođač Arnoldo Perez Melendez Sorta Caturra  Proces obrade.",
      img_path: p1,
      category_id: 1,
      coffee_id: 1,
      user_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      title: "Kako najbolje zapoceti dan? Ukus za dobro jutro.",

      post_content:
        "Država - Guatemala Farma  La senada Note  crvena trešnja,konjak,džem borovnice,intezivna Regija Acatenango,Chimaltenango \n Proizvođač Arnoldo Perez Melendez Sorta Caturra  Proces obradeCarbonic maseration  Cupping rezultat ",

      img_path: p2,
      category_id: 1,
      coffee_id: 1,
      user_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);

  return (
    <>
      <NavBar></NavBar>
      <div className="coffeeTable">
        <div className="coffeeTableHeader">
          <h2>Clanci</h2>
          <button className="btnAddCoffee" value="Open" onClick={openModalAdd}>
            Dodaj novi clanak
          </button>

          <Modal
            isOpen={modalAddIsOpen}
            onRequestClose={closeModalAdd}
            contentLabel="Nov korisnik"
          >
            <div className="modalContent">
              <AddPost></AddPost>
            </div>
          </Modal>
        </div>

        <table className="table" style={{ marginTop: "5px" }}>
          <thead>
            <tr id="tableCol">
              <td>Naslov</td>
              <td>Sadrzaj</td>
              <td>Kategorija</td>
              <td>Kafa</td>
              <td>Autor</td>
              <td>Kreirano</td>
              <td>Promenjeno</td>
              <td>Obrisi</td>
              <td>Pogledaj</td>
              <td>Izmeni</td>
            </tr>
          </thead>
          <tbody id="tableBody">
            {posts.map((p) => (
              <tr>
                <td>{p.title} </td>
                <td>{p.post_content.substring(0, 20)}...</td>
                <td>{p.category_id}</td>
                <td>{p.coffee_id}</td>
                <td>{p.user_id}</td>
                <td>{p.created_at.getDate()}</td>
                <td>{p.updated_at.getDate()}</td>
                <td>
                  <button className="btnDeleteCoffee" onClick={deletePost}>
                    obrisi{" "}
                  </button>
                </td>
                <td>
                  <button
                    className="btnUpdateCoffee"
                    value="Open"
                    onClick={openModalView}
                  >
                    pogledaj
                  </button>

                  <Modal
                    isOpen={modalViewIsOpen}
                    onRequestClose={closeModalView}
                    contentLabel="Detalji o kafi"
                  >
                    <div style={{ marginTop: "2em" }}>
                      <div>
                        <button
                          onClick={closeModalView}
                          id="radius"
                          className="btnUpdateCoffee"
                        >
                          Zatvori
                        </button>
                        <SingleBP />
                      </div>
                    </div>
                  </Modal>
                </td>
                <td>
                  <button
                    className="btnUpdateCoffee"
                    value="Open"
                    onClick={openModalUpdate}
                  >
                    izmeni
                  </button>

                  <Modal
                    isOpen={modalUpdateIsOpen}
                    onRequestClose={closeModalUpdate}
                    contentLabel="Detalji o clanku"
                  >
                    <div style={{ marginTop: "2em" }}>
                      <div>
                        <button
                          onClick={closeModalUpdate}
                          id="radius"
                          className="btnUpdateCoffee"
                        >
                          Zatvori
                        </button>
                        <h2 className="modalTitle">Detalji o clanku</h2>
                        <AddPost />
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
export default PostTable;
