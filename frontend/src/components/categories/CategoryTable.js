import {useEffect, useState} from "react";
import "../../styles/Entity.css";
import Footer from "../navigation/Footer";
import NavBar from "../navigation/NavBar";
import Modal from "react-modal";
import CategoryInfo from "./CategoryInfo";
import cb from "../../images/coffeeBean.jpg";
import axios from "axios";

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

    // const [categories] = useState([
    //   {
    //     id: 1,
    //     name: "kategorija 1",
    //     slug: "kat 1",
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    //   {
    //     id: 2,
    //     name: "kategorija 2",
    //     slug: "kat 2",
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    // ]);

    const [categories, setCategories] = useState();

    useEffect(() => {
        if (categories == null) {
            axios.get('http://localhost:8000/api/category')
                .then((res) => {
                console.log(res.data)
                setCategories(res.data.categories)
            }).catch((e)=>{
                console.log(e)
            })
        }
    }, [categories])

    return (
        <>
            <NavBar></NavBar>
            <div className="coffeeTable">
                <div className="coffeeTableHeader">
                    <h2>Kategorije</h2>
                    <button className="btnAddCoffee" value="Open" onClick={openModal}>
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
                                <CategoryInfo/>
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
                    {categories == null ? <></> : categories.map((k) => (
                        <tr key={k.id}>
                            <td>{k.name} </td>
                            <td>{k.slug}</td>
                            <td>{k.created_at}</td>
                            <td>{k.updated_at}</td>
                            <td>
                                <button className="btnDeleteCoffee" onClick={deleteCategory}>
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
                                            <CategoryInfo/>
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
