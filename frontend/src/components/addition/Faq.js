import React from "react";
import "../../styles/Faq.css";

const Faq = () => {
  return (
    <div className="faq-section">
      <div id="header">
        <h1>Najčešće postavljena pitanja </h1>
      </div>
      <div class="containerFAQ">
        <div class="accordion">
          <div class="accordion-item" id="q1">
            <a class="accordion-link" href="#q1">
              Da li Vase kafe sadrze gluten?
            </a>
            <div class="answer">
              <p> Sve nase kafe i ukusi su gluten free.</p>
            </div>
          </div>
          <div class="accordion-item" id="q2">
            <a class="accordion-link" href="#q2">
              Da li koristite vestacke zasladjivace?
              <i class="icon ion-md-add"></i>
              <i class="icon ion-md-remove"></i>
            </a>
            <div class="answer">
              <p>
                Da, koristimo ih. Nase kafe sa ukusima sadrze prirodne i
                vestacke zasladjivace.
              </p>
            </div>
          </div>
          <div class="accordion-item" id="q3">
            <a class="accordion-link" href="#q3">
              Kako napraviti najbolju kafu?
              <i class="icon ion-md-add"></i>
              <i class="icon ion-md-remove"></i>
            </a>
            <div class="answer">
              <p>
                {" "}
                Prvo i najvaznije je upotreba svezih zrna kafe. Potrebno je i
                samleti zrna na pravi nacin.
              </p>
            </div>
          </div>
          <div class="accordion-item" id="q4">
            <a class="accordion-link" href="#q4">
              Koliko imakofeina u jednoj solji kafe?
              <i class="icon ion-md-add"></i>
              <i class="icon ion-md-remove"></i>
            </a>
            <div class="answer">
              <p>
                200ml kafe u proseku sadrzi 100 do 150 miligrama kofeina, a to
                zavisi od tipa kafe i nacina mlevenja.{" "}
              </p>
            </div>
          </div>
          <div class="accordion-item" id="q5">
            <a class="accordion-link" href="#q5">
              Da li je bolje kupiti kafu u zrnu ili samlevenu?
              <i class="icon ion-md-add"></i>
              <i class="icon ion-md-remove"></i>
            </a>
            <div class="answer">
              <p>
                U toku procesa mlevenja kafe,ona gubi ukus i aromu. Svrha
                mlevenja zrna jeste kreiranje vece povrsine koja ce otpustiti
                ukus i ulja u vodu. Kada je kafa izlozena vazduhu, ona pocinje
                da gubi ukus. Ako kupite kafu u zrnu, preporucujemo da se
                samelje u roku od 2 nedelje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
