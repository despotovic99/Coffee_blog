import React from "react";
import { Button } from "../components/pageEssentials/Button";
import "../styles/Start.css";

function Start() {
  return (
    <div className="start-container">
      <video id="videoStart" src='/videos/pokreniUzitak.mp4' autoPlay loop muted />
      <h1>Dobrodošli u svet kafe</h1>
      <p>Najveća zajednica ljubitelja kafe u Srbiji</p>
      <div className="start-btn">
        <Button
          route="/home"
          className="btn"
          buttonStyle="basic"
          buttonSize="large"
          text="Pokreni užitak!"
         >
        </Button>
      </div>
    </div>
  );
}

export default Start;