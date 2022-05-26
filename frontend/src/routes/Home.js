import React from "react";
import Navbar from "../components/navigation/NavBar";
import Footer from "../components/navigation/Footer";
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
