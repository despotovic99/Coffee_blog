import React from "react";
import "../../styles/SingleBP.css";
import { AiOutlineUser } from "react-icons/ai";

function CommentBox() {
  return (
    <>
      <div
        class="d-flex "
        style={{ height: "160%", border: "1px solid rgba(0, 0, 0, 0.25)" }}
      >
        <div class="flex-shrink-0">
          <AiOutlineUser style={{ marginLeft: "2rem" }} />
        </div>
        <div class="ms-3">
          <div class="fw-bold" style={{ paddingBottom: "1em" }}>
            <b>Username1</b>
          </div>
          <div class="d-grid flex-column">
            Komentar......
            <button
              style={{
                marginLeft: "-3.5em",
                marginTop: "1em",
                marginBottom: "1em",
                height: "60%",
                width: "65%",
                backgroundColor: " #17181b",
                color: "white",
                border: " 3 px solid var(--primary)",
                transition: "all 0.3s ease-out",
                borderRadius: "10px",
              }}
              text="Potvrdi"
            >
              {" "}
              Obrisi
            </button>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
}

export default CommentBox;
