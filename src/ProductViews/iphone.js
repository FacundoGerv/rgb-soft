import React from "react";
import "./../styles/Products.css";
import Imagen from "./../images/prueba1.jpg"

const Iphone = () => {
  return (
    <div className="category-container">
      <div className="card-container"style={{ backgroundImage: `url('${Imagen}')` }}>
      <span >Iphone 1</span>
      </div>
      <div className="card-container">
        <span>Iphone 3</span>
      </div>
      <div className="card-container">
        <span>Iphone 4</span>
      </div>
      <div className="card-container">
        <span>Iphone 5</span>
      </div>
      <div className="card-container">
        <span>Iphone 6</span>
      </div>
      <div className="card-container">
        <span>Iphone 7</span>
      </div>
      <div className="card-container">
        <span>Iphone 8</span>
      </div>
      <div className="card-container">
        <span>Iphone 9</span>
      </div>
      <div className="card-container">
        <span>Iphone 10</span>
      </div>
      <div className="card-container">
        <span>Iphone 11</span>
      </div>
      <div className="card-container">
        <span>Iphone XR</span>
      </div>
    </div>
  );
};

export default Iphone;