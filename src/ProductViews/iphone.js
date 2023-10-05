import React, { useState } from 'react';
import './../styles/Products.css';

const Iphone = () => {
  const [selectedDiv, setSelectedDiv] = useState(null); // Estado para almacenar el div seleccionado

  const divArray = Array.from({ length: 10 }, (_, index) => index + 1);

  const selection = (event) => {
    const selDiv = event.target;
    setSelectedDiv(selDiv);
    hidecard();
  };
  const closeOverlay = () => {
    setSelectedDiv(null);
    showcard();
  };
  const generateContent = () => {
    if (selectedDiv) {
      // Aquí puedes generar contenido basado en el div seleccionado
      return (
        <div className="overlay" onClick={closeOverlay}>
          <h1>{selectedDiv.textContent}</h1>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="category-container">
      {divArray.map((divNumber) => (
        <div className="card-container show-card" key={divNumber} id="card-hover" onClick={selection}>
          <span>Iphone {divNumber}</span>
        </div>
      ))}
      {generateContent()}
    </div>
  );
};
function showcard() {
  var cards = document.getElementsByClassName("card-container");
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.add("show-card");
  };
};

function hidecard() {
  var cards = document.getElementsByClassName("card-container");
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.remove("show-card");
  };
};

export default Iphone;