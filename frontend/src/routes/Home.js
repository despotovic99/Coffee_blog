import React from "react";
import Posts from "../components/post/SelectedPosts.js";
import Galery from "../components/addition/Galery.js";
import "../styles/Start.css";

const Home = () => {
  return (
    <>
      <Galery />
      <Posts />
    </>
  );
};

export default Home;
