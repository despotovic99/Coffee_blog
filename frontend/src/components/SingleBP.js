import React from "react";
import "../styles/SingleBP.css";
import p4 from "../images/post4.jpg";
import {AiOutlineUser } from 'react-icons/ai';
import Sidebar from "../components/Sidebar.js";


function SingleBP() {
  return (
    <>
    
        
        <div class="container mt-5" style={{marginBottom:-200+"px"}}>
            <div class="row">
                <div class="col-lg-8">
                    <article>
                        <header class="mb-4">
                            <h1 class="fw-bolder mb-1">Najskuplje vrste kafe.</h1>
                            <div class="text-muted fst-italic mb-2">Postavljeno 21. Februara 2022. Postavio XXX</div>
                            <a class="badge bg-dark text-decoration-none link-light" href="#!">Zanimljivosti</a> 
                            <a class="badge bg-dark text-decoration-none link-light" href="#!">Svet</a>
                        </header>
                        <figure class="mb-4"><img class="img-fluid rounded" src={p4} alt="..." /></figure>
                        <section class="mb-5">
                            <p class="fs-5 mb-4"> Znate li zbog čega je Kopi Luwak najskuplja kafa na svetu? Ukoliko niste čuli za nju, Svet lepote vam donosi sve informacije o najskupljoj kafi na svetu.</p>
                            <p class="fs-5 mb-4"> Kafa je svakodnevni napitak, a najveće kafopije prema statistici popiju i po šest ovih napitaka dnevno. Kofein u njoj nas razbuđuje i sprema za novi radni dan. Mnogo ljudi na svetu posebno užuvaju u ritualu ispijanja kafe. Na svetu postoji na hiljade vrsta kafe, a mi vam  donosimo jednu koja se izdvojila po načinu proizvodnje i ceni.</p>
                            <p class="fs-5 mb-4">Najskuplja kafa potiče iz Indonezije i zove se Kopi Luwak. Ona je ujedno i najređe piće na svetu po svojoj osobenosti i proizvodnji. Ime je dobila po životinjici iz porodice divljih mačaka koji se zove Luvak. On je vrsta sisara koji pripada svaštojedima i hrani se bobicama kafe. Kada one prođu kroz njen digestivni trakt i kada ih ovaj sisar izbaci iz organizma, tada se pravi kafa. Najneobičniji proces pravljenja kafe pripada upravo ovoj vrsti i one se nakon tog procesa sakupljaju, peru i suše na suncu. Nakon ovoga bobice od praktično izmeta, a zapravo bobičaste kafe melju se i pakuju u kesice. One su bogatije amino kiselinama kada prođu kroz Luvakov organizam.</p>
                            
                        </section>
                    </article>
                    <section class="mb-5" style={{paddingBottom:200+"px"}}>
                        <div class="card bg-light">
                            <div class="card-body" >
                                <form class="mb-4"><textarea class="form-control" rows="3" placeholder="Ostavite komentar i pridruzi se diskusiji!"></textarea></form>
                                <div class="d-flex mb-4">
                                    <div class="flex-shrink-0"><AiOutlineUser style={{marginLeft: '2rem'}} /></div>
                                    <div class="ms-3">
                                        <div class="fw-bold">Username1</div>
                                        Hvala na informaciji.
                                        <div class="d-flex mt-4">
                                            <div class="flex-shrink-0"><AiOutlineUser style={{marginLeft: '2rem'}} /></div>
                                            <div class="ms-3">
                                                <div class="fw-bold">Admin</div>
                                                Uvek smo tu za Vas.
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <div class="flex-shrink-0"><AiOutlineUser style={{marginLeft: '2rem'}} /></div>
                                    <div class="ms-3">
                                        <div class="fw-bold">Username1</div>
                                         Voleo bih vise ovako zanimljivih postova.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="col-lg-4" style={{marginTop:500+"px", height:1000+"px"}}>
                 <Sidebar/> 
                    </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

        </>

  );
}

export default SingleBP;