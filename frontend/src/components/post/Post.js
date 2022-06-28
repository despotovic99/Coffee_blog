import React from "react";
import {AiOutlineCalendar, AiOutlineUser, AiOutlineEye} from "react-icons/ai";
import {Button} from "../pageEssentials/Button";
import {Link} from "react-router-dom";

function Post({post}) {
    return (
        <>
            <div className="post">
                <div className="postInfo">
                    <div className="postTitle1">
                    <img class="img-fluid rounded" src="https://media.istockphoto.com/photos/coffee-beans-picture-id1294621870?k=20&m=1294621870&s=612x612&w=0&h=CX7W7LTMZRodtRov6laIdmFSvQT7rjxpz75Y6ncGBdg=" alt="sajadslaks" />

                        <Link to={'/singleBP/' + post.id}>{post.title}</Link>
                    </div>

                    <p className="postDate" style={{marginLeft: -200 + "px"}}>
                        <AiOutlineUser style={{marginLeft: "2rem"}}/>
                        {post.user_id.name}
                        <AiOutlineCalendar style={{marginLeft: "2em"}}/>
                        {(new Date(post.updated_at)).toLocaleDateString()}
                    </p>
                </div>
                <p className="postDesc">Kategorija: {post.category_id.name}</p>
            </div>
        </>
    );
}

export default Post;
