import React from "react";
import "../../styles/SingleBP.css";
import { AiOutlineUser } from "react-icons/ai";

function CommentBox({comment}) {
  return (
    <>
      <div
        className="d-flex "
        style={{ height: "160%", border: "1px solid rgba(0, 0, 0, 0.25)" }}
      >
        <div className="flex-shrink-0">
          <AiOutlineUser style={{ marginLeft: "2rem" }} />
        </div>
        <div className="ms-3">
          <div className="fw-bold" style={{ paddingBottom: "1em" }}>
            <b>{comment.user_id.name} {comment.user_id.lastname}</b>
          </div>
          <div className="d-grid flex-column">
              {comment.content}
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
