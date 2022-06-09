import React from "react";
import { useState } from "react";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import "../../styles/Contact.css";
import InputField from "../pageEssentials/InputField";
import { Button } from "../pageEssentials/Button";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    let vN = name;
    let vE = email;
    let vM = message;

    console.log("Ime: " + vN + "\n  Email: " + vE + "\n Poruka: " + vM);
  };
  return (
    <div className="ContactPage">
      <div className="containerContact">
        <div className="header">
          <h1>KONTAKT</h1>
        </div>
        <div className="content">
          <div className="content-form">
            <div>
              <h2>
                Facebook <BsFacebook style={{ marginRight: "1rem" }} />
              </h2>
            </div>

            <div>
              <h2>
                Instagram <FaInstagram style={{ marginRight: "1rem" }} />
              </h2>
            </div>

            <div>
              <h2>
                E-mail <FaEnvelope style={{ marginRight: "2rem" }} />
              </h2>
            </div>
          </div>
        </div>

        <div className="form">
          <div className="right">
            <div className="contact-form">
              <InputField
                value={name}
                id="name"
                type="text"
                placeholder="Vase ime i prezime"
                onChange={(e) => setName(e.target.value)}
              />
              <div className="spand" style={{ marginTop: -75 + "px" }}>
                Ime i prezime
              </div>
            </div>

            <div className="contact-form">
              <InputField
                value={email}
                id="email"
                type="text"
                placeholder="Vas email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="spand" style={{ marginTop: -75 + "px" }}>
                E-mail{" "}
              </div>
            </div>
            <div className="contact-form">
              <textarea
                name="text"
                value={message}
                id="message"
                type="text"
                placeholder="Vasa poruka"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="spand" style={{ marginTop: -85 + "px" }}>
                {" "}
                Sadrzaj poruke
              </div>
            </div>

            <div className="contact-form">
              <Button
                className="btnReset"
                buttonStyle="color"
                buttonSize="small"
                onClick={handleClick}
                text="Posalji"
                route="/contacts"
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
