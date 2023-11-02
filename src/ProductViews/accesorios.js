/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import './../styles/Products.css';
import whatsappIcon from "./../images/whatsapp.png";
import Backicon from "./../images/back-icon.png"
import Editicon from "./../images/edit.png";
import Tickicon from "./../images/tick.png";
import { click } from '@testing-library/user-event/dist/click';
import { useGlobalContext } from './../GlobalContext';

export default function Accesories(){
  const [selectedProduct, setSelectedProduct] = useState(null);
  const overlayRef = useRef(null);
  const { temporaryToken } = useGlobalContext();
  const { groupedProducts } = useGlobalContext();
  console.log('groupedProducts:', groupedProducts);
  const accesoriesProducts = (groupedProducts['accesories'] || []).filter((product) => !product.isSold);

  const selection = (selectedProduct) => {
    setSelectedProduct(selectedProduct);
    hidecard();

  };
  const closeOverlay = (event) => {
    if (selectedProduct && overlayRef.current && !overlayRef.current.contains(event.target)) {
      setSelectedProduct(null);
      showcard();
    }
  };

  const SliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 10,
    vertical: false,
    className: "slider-container-products",
    pauseOnHover: true,
  };

  return (
    
    <div
      className="product-container"
      onClick={closeOverlay}>
      <div className="category-container">
        <h1 className="category-title">Accesorios uwu</h1>
        {accesoriesProducts && accesoriesProducts.map((product, index) => (
          <div
            className={"card-container show-card"}
            key={index}
            id="card-hover"
            onClick={() => selection(product)}
          >
            <span>{product.title}</span>
            <div className="image-container">
              <img className="product-image" src={require("./../images/" + product.image)} alt="Descripción de la imagen" />
            </div>
          </div>
        ))}
      </div>
      {/* OVERLAY */}
      {selectedProduct && (
        <div
          className="overlay"
          ref={overlayRef}>
          <div className='inner-title'>
            <h1>{selectedProduct.title}</h1>
          </div>
          <div className='inner-overlay'>
            <Slider {...SliderSettings}>
              <div className='slider-image-container'>
                <img className="product-image" src={require("./../images/" + selectedProduct.image)} alt="Descripción de la imagen" />
              </div>
              <div className='slider-image-container'>
                <img className="product-image" src={require("./../images/" + selectedProduct.image)} alt="Descripción de la imagen" />
              </div>
              <div className='slider-image-container'>
                <img className="product-image" src={require("./../images/" + selectedProduct.image)} alt="Descripción de la imagen" />
              </div>
            </Slider>
            <div className="product-info-list">
              <span>Color: {selectedProduct.color}</span>
              <span>Procesador: {selectedProduct.cpu}</span>
              <span>Memoria RAM: {selectedProduct.memory_ram}</span>
              <span>Cámara: {selectedProduct.camera}</span>
              <span>Memoria interna: {selectedProduct.memory}</span>
              <span>Pantalla: {selectedProduct.screen}</span>
              <span>Bateria: {selectedProduct.batery}</span>
              <span>Precio: ${selectedProduct.price}</span>
            </div>
          </div>
          <div className='inner-text'>
            <span>{selectedProduct.description}</span>
          </div>
          {!temporaryToken && (
            <div className='button-container'>
              <div className="whatsapp-button" onClick={sendWhatsAppMessage}>
                <img src={whatsappIcon} alt="whatsapp button logo" />
                <span>Whatsapp</span>
              </div>
            </div>
          )}
          {temporaryToken && (
            <div className='admin-button-container'>
              <div className="card-button" onClick={sendWhatsAppMessage}>
                <img src={Editicon} alt="whatsapp button logo" />
                <span>Editar</span>
              </div>
              <div className="card-button" onClick={sendWhatsAppMessage}>
                <img src={Tickicon} alt="whatsapp button logo" />
                <span>Vendido</span>
              </div>
            </div>
          )}
          <div>
          </div>
        </div>
      )}
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

const sendWhatsAppMessage = (selectedProduct) => {
  const phoneNumber = '2604677605';
  const message = { selectedProduct };

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  window.open(whatsappLink, '_blank');
};


