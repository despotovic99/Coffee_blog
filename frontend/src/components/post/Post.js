import React from "react";
import { AiOutlineCalendar, AiOutlineUser, AiOutlineEye } from "react-icons/ai";
import { Button } from "../pageEssentials/Button";

function Post({ post }) {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
          crossorigin="anonymous"
        />
      </head>

      <div className="post">
        <div id="imgContent">
          <img className="postImg" src={post.src} alt={post.alt} />
          <div class="button">
            <Button
              className="btnShow"
              buttonStyle="color"
              buttonSize="small"
              text="Vidi jos"
              route="/singleBP"
            ></Button>
          </div>
        </div>

        <div className="postInfo">
          <div className="postTitle1">
            <a href="/singleBP">{post.title}</a>
          </div>

          <p className="postDate" style={{ marginLeft: -200 + "px" }}>
            <AiOutlineEye style={{ marginLeft: "2rem" }} />
            1000
            <AiOutlineUser style={{ marginLeft: "2rem" }} />
            admin
            <AiOutlineCalendar style={{ marginLeft: "2em" }} />
            Jan 20, 2018
          </p>
        </div>
        <p className="postDesc">{post.description}</p>
      </div>
    </>
  );
}

export default Post;
