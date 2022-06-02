import React from "react";
import { AiOutlineCalendar, AiOutlineUser, AiOutlineEye } from "react-icons/ai";
import { Button } from "../pageEssentials/Button";
import {Link} from "react-router-dom";

function Post({ post }) {
  return (
    <>
      <div className="post">
        <div id="imgContent">
          <img className="postImg" src={post.img} alt="No image" />
          <div className="button">
            <Button
              className="btnShow"
              buttonStyle="color"
              buttonSize="small"
              text="Vidi jos"
              route={'/singleBP/'+post.id}
            />
          </div>
        </div>

        <div className="postInfo">
          <div className="postTitle1">

            <Link to={'/singleBP/'+post.id} >{post.title}</Link>
          </div>

          <p className="postDate" style={{ marginLeft: -200 + "px" }}>
            <AiOutlineEye style={{ marginLeft: "2rem" }} />
            1000
            <AiOutlineUser style={{ marginLeft: "2rem" }} />
            {post.user_id.name}
            <AiOutlineCalendar style={{ marginLeft: "2em" }} />
            {(new Date(post.updated_at)).toLocaleDateString()}
          </p>
        </div>
        <p className="postDesc">Kategorija: {post.category_id.name}</p>
      </div>
    </>
  );
}

export default Post;
