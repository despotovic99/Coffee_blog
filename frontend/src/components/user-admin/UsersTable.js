import {useEffect, useState} from "react";
import "../../styles/Entity.css";
import Footer from "../navigation/Footer";
import NavBar from "../navigation/NavBar";
import Modal from "react-modal";
import UserInfo from "./UserInfo";
import CoffeeInfo from "../coffee/CoffeeInfo";
import user from "../../images/user.jpg";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const UsersTable = () => {

    const navigate = useNavigate()

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


    const [users, setUsers] = useState(null);

    useEffect(() => {
        if (users === null) {
            axios.get('http://localhost:8000/api/user', {
                headers: {
                    'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token')
                }
            }).then((res) => {
                console.log(res.data.users)
                setUsers(res.data.users)
            }).catch((e) => {
                console.log(e)
            })
        }
    }, [users])

    return (
        <>
            <div className="coffeeTable">
                <div className="coffeeTableHeader">
                    <h2>Korisnici</h2>
                    <button className="btnAddCoffee" value="Open" onClick={openModal}>
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
                                <UserInfo/>
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
                        <td>Korisnicka uloga</td>
                        <td>Kreirano</td>
                        <td>Promenjeno</td>
                        <td>Obrisi</td>
                        <td>Izmeni</td>
                    </tr>
                    </thead>
                    <tbody id="tableBody">
                    {users === null ? <></> : users.map((u) => (
                        <tr key={u.id}>
                            <td>{u.name} </td>
                            <td>{u.lastname}</td>
                            <td>{u.email}</td>
                            <td>{u.user_role_id.role_name}</td>
                            <td>{u.created_at}</td>
                            <td>{u.updated_at}</td>
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
                                            <UserInfo/>
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

        </>
    );
};
export default UsersTable;
