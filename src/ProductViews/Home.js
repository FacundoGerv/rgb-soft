/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./../styles/Home.css"
import Slider from "react-slick"
import PHimage from "./../images/prueba1.jpg"
import testicon from "./../images/sidebar-menu-icon.png"
import "slick-carousel/slick/slick.css";
import tt from "./../Navbar"
// import "slick-carousel/slick/slick-theme.css";

const HomeView = () => {
  const SliderSettings = {
    dots: true,
    infinite: true,
    // fade: true,
    speed: 7500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 5000,
    className: "slider-container",
    vertical: false,
    pauseOnHover: true,
  };
  // LOGIN 

  const [password, setPassword] = useState('');
  const handleLogin = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    const enteredPassword = event.target.password.value; // Obtiene el valor del campo de contraseña por su atributo 'name'

    if (enteredPassword === "uwu") {
      // Lógica de inicio de sesión exitosa
      console.log('Inicio de sesión exitoso');
      openAdminLogin();
    } else {
      // Lógica de inicio de sesión fallido
      console.log('Inicio de sesión fallido');
      passError();
    }
  };
  function passError() {
    const input = document.getElementsByClassName("adminInput")[0];
    input.classList.add("adminInputError");

    // Agregar un retraso de 2 segundos (2000 milisegundos)
    setTimeout(function () {
      input.classList.remove("adminInputError");
    }, 3000);
  }


  return (
    <div className="home-container">
      <div className="button-wrap" onClick={openAdminLogin}>
        <span className="button-line"> </span>
        <span className="button-line"> </span>
        <span className="button-line"> </span>
      </div>
      <form className="adminDropdown" onSubmit={handleLogin}>
        <span>Admin Login</span>
        <input
          className="adminInput"
          type="password"
          name="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingrese token de administrador"
        />
        <button className="loginBtn" type="submit" >
          Login
        </button>
      </form>
      <h1 className="home-title">RGBSoft</h1>
      <Slider {...SliderSettings}>
        <div>
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div className="slider-container">
              <img src={PHimage} alt="test1" />
              <div className="text-container">
                <div className="text-title">
                  <h1>PlaceHolder 1 xxx xxx</h1>
                </div>
                <div className="text-desc">
                  <span>Desc Item 1</span>
                  <span>Desc Item 2</span>
                  <span>Desc Item 3</span>
                  <span>Desc Item 4</span>
                  <span>Desc Item 5</span>
                  <span>Desc Item 6</span>
                  <span>Desc Item 7: PlaceHolder 7</span>
                  <span>Desc Item 8 (PlaceHolder on Parentheses)</span>
                  <span>Desc Item 9 [PlaceHolder on Brackets]</span>
                  <span>Desc Item 10 "REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT  REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div className="slider-container">
              <img src={PHimage} alt="test1" />
              <div className="text-container">
                <div className="text-title">
                  <h1>PlaceHolder 2</h1>
                </div>
                <div className="text-desc">
                  <p>
                    "Camara: 15mpx
                    procesador: a12 2.5gHz
                    Desc Item 2
                    Desc Item 3
                    Desc Item 4
                    Desc Item 5
                    Desc Item 6
                    Desc Item 7: PlaceHolder 7
                    Desc Item 8 (PlaceHolder on Parentheses)
                    Desc Item 9 [PlaceHolder on Brackets]
                    Desc Item 10 "REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT  REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT""</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div className="slider-container">
              <img src={PHimage} alt="test1" />
              <div className="text-container">
                <div className="text-title">
                  <h1>PlaceHolder 3</h1>
                </div>
                <div className="text-desc">
                  <span>Desc Item 1</span>
                  <span>Desc Item 2</span>
                  <span>Desc Item 3</span>
                  <span>Desc Item 4</span>
                  <span>Desc Item 5</span>
                  <span>Desc Item 6</span>
                  <span>Desc Item 7: PlaceHolder 7</span>
                  <span>Desc Item 8 (PlaceHolder on Parentheses)</span>
                  <span>Desc Item 9 [PlaceHolder on Brackets]</span>
                  <span>Desc Item 10 "REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT  REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div className="slider-container">
              <img src={PHimage} alt="test1" />
              <div className="text-container">
                <div className="text-title">
                  <h1>PlaceHolder 4</h1>
                </div>
                <div className="text-desc">
                  <span>Desc Item 1</span>
                  <span>Desc Item 2</span>
                  <span>Desc Item 3</span>
                  <span>Desc Item 4</span>
                  <span>Desc Item 5</span>
                  <span>Desc Item 6</span>
                  <span>Desc Item 7: PlaceHolder 7</span>
                  <span>Desc Item 8 (PlaceHolder on Parentheses)</span>
                  <span>Desc Item 9 [PlaceHolder on Brackets]</span>
                  <span>Desc Item 10 "REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT  REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT REALLY LONG TEXT"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
function openAdminLogin() {
  var adminClasses = document.getElementsByClassName("adminDropdown")[0];
  var buttonClasses = document.getElementsByClassName("button-wrap")[0];
  var buttonLineClass = document.getElementsByClassName("button-line");
  if (adminClasses.classList.contains("adminDisplay")) {
    adminClasses.classList.remove("adminDisplay");
    buttonClasses.classList.remove("adminButtonAtt");
    for (var i = 0; i < buttonLineClass.length; i++) {
      buttonLineClass[i].classList.remove("adminButtonLineAtt");
    }
  } else {
    adminClasses.classList.add("adminDisplay");
    buttonClasses.classList.add("adminButtonAtt");
    for (var i = 0; i < buttonLineClass.length; i++) {
      buttonLineClass[i].classList.add("adminButtonLineAtt");
    }
  }
};

export default HomeView;
