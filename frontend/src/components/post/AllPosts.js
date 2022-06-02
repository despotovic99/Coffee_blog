import React, {useEffect, useState} from "react";
import "../../styles/Posts.css";
import Post from "./Post";
import p1 from "../../images/post1.jpg";
import p2 from "../../images/post2.jpg";
import p3 from "../../images/post3.jpg";
import p4 from "../../images/post4.jpg";
import p5 from "../../images/post5.jpg";
import axios from "axios";

const AllPosts = () => {
  const [posts,setPosts] = useState(null);
  useEffect(() => {
    if (posts === null) {
      axios.get('http://localhost:8000/api/coffee-post')
          .then((res) => {
            setPosts(res.data.posts)
          }).catch((e) => {
      })
    }
  }, [posts])
  return (
    <>
      <video src="/videos/allposts.mp4" autoPlay loop muted />

      <div className="allcards">
        {posts===null?<></>:
            posts.map((post) => (
                <Post post={post} key={post.id} />
            ))}
      </div>
    </>
  );
};
export default AllPosts;
