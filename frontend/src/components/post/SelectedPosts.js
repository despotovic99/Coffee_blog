import React from "react";
import "../../styles/Posts.css";
import Post from "./Post";
import p1 from "../../images/post1.jpg";
import p2 from "../../images/post2.jpg";
import p3 from "../../images/post3.jpg";
import p4 from "../../images/post4.jpg";
import { useState } from "react";
import Sidebar from "../addition/Sidebar.js";

function SelectedPosts() {
  const [posts] = useState([
    {
      id: 1,
      title: "Kako do savrsene kafe?",
      description:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      body: "Država - Guatemala Farma – La senada \n Note – crvena trešnja,konjak,džem borovnice,intezivna \n Regija – Acatenango,Chimaltenango \n Proizvođač – Arnoldo Perez Melendez \n Sorta – Caturra \n Proces obrade – Carbonic maseration \n Cupping rezultat – 88.5 \n Godina berbe – 2021",
      src: p1,
    },
    {
      id: 2,
      title: "Kako najbolje zapoceti dan? ",
      description: "Kafa sa notom crvenog vina,ruma,sušene trešnje",
      body: "Država - Guatemala Farma – La senada \n Note – crvena trešnja,konjak,džem borovnice,intezivna \n Regija – Acatenango,Chimaltenango \n Proizvođač – Arnoldo Perez Melendez \n Sorta – Caturra \n Proces obrade – Carbonic maseration \n Cupping rezultat – 88.5 \n Godina berbe – 2021",
      src: p2,
    },
    {
      id: 3,
      title: "Svi nacini mlevenja kafe.",
      description: "Kafa sa notom mlecne cokolade,sušenog voća i cimeta.",
      body: "Država - Guatemala Farma – La senada \n Note – crvena trešnja,konjak,džem borovnice,intezivna \n Regija – Acatenango,Chimaltenango \n Proizvođač – Arnoldo Perez Melendez \n Sorta – Caturra \n Proces obrade – Carbonic maseration \n Cupping rezultat – 88.5 \n Godina berbe – 2021",
      src: p3,
    },
    {
      id: 4,
      title: "Najskuplje vrste kafe.",
      description: "Kafa sa notom crne ribizle, crvenog voća i maline",
      body: "Država - Guatemala Farma – La senada \n Note – crvena trešnja,konjak,džem borovnice,intezivna \n Regija – Acatenango,Chimaltenango \n Proizvođač – Arnoldo Perez Melendez \n Sorta – Caturra \n Proces obrade – Carbonic maseration \n Cupping rezultat – 88.5 \n Godina berbe – 2021",
      src: p4,
    },
  ]);
  return (
    <>
      <div className="home">
        <div className="selectedcards">
          {posts.map((bl) => (
            <Post post={bl} key={bl.id} />
          ))}
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default SelectedPosts;
