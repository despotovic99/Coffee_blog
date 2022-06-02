import React, {useEffect} from "react";
import "../../styles/Posts.css";
import Post from "./Post";
import p1 from "../../images/post1.jpg";
import p2 from "../../images/post2.jpg";
import p3 from "../../images/post3.jpg";
import p4 from "../../images/post4.jpg";
import { useState } from "react";
import Sidebar from "../addition/Sidebar.js";
import axios from "axios";

function SelectedPosts() {
  const [posts,setPosts] = useState(null);
  useEffect(() => {
         if (posts === null) {
        axios.get('http://localhost:8000/api/coffee-post-newest')
            .then((res) => {
              setPosts(res.data.posts)
              console.log(res.data)
            }).catch((e) => {
        })
      }
  }, [posts])
  return (
    <>
      <div className="home">
        <div className="selectedcards">
          {posts===null?<></>:
              posts.map((post) => (
              <Post post={post} key={post.id} />
          ))}
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default SelectedPosts;
