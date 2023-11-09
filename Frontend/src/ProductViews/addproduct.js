import React, { useState } from 'react';
import './../styles/addprod.css';
import iphoneIcon from './../images/iphone-icon.png';
import airpodsIcon from './../images/airpods.png';
import iwatchIcon from './../images/iwatch-icon.png';
import accesoriesIcon from './../images/iphone-case.png';
import energyIcon from './../images/charger-icon.png';

export default function AddProduct() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    memory_ram: "",
    color: "",
    camera: "",
    screen: "",
    batery: "",
    cpu: "",
    image: "",
    desciption: "",
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCategoryClick = (category) => {
    setFormData({ ...formData, category });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convierte el formData a JSON
    const jsonData = JSON.stringify(formData);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: jsonData,
      redirect: 'follow',
    };

    fetch("http://localhost:8080/product", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        // Puedes manejar la respuesta aquí
      })
      .catch(error => console.log('error', error));
    setFormData({
      title: "",
      category: "",
      memory_ram: "",
      color: "",
      camera: "",
      screen: "",
      batery: "",
      cpu: "",
      image: "",
      desciption: "",
      price: 0,
    });
  };

  return (
    <div className='container'>
      <div className='size'>
        <div className='inner-content'>
          <h1>Añadir Producto</h1>
          <div className='button-container'>
            <button
              type="button"
              onClick={() => handleCategoryClick('iphone')}
              className={formData.category === 'iphone' ? 'active' : ''}
            >
              <img src={iphoneIcon} att="Button Image" id='iphoneicon' />
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick('airpods')}
              className={formData.category === 'airpods' ? 'active' : ''}
            >
              <img src={airpodsIcon} att="Button Image" id='airpodsicon' />
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick('applewatch')}
              className={formData.category === 'applewatch' ? 'active' : ''}
            >
              <img src={iwatchIcon} att="Button Image" id='iwatchicon' />
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick('accesorios')}
              className={formData.category === 'accesorios' ? 'active' : ''}
            >
              <img src={accesoriesIcon} att="Button Image" id='accesoriesicon' />
            </button>
            <button
              type="button"
              onClick={() => handleCategoryClick('cargadores')}
              className={formData.category === 'cargadores' ? 'active' : ''}
            >
              <img src={energyIcon} att="Button Image" id='batteryicon' />
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className='add-form'>
            <input
              type="text"
              name="title"
              placeholder="Título"
              value={formData.title}
              onChange={handleChange}
            />
            <input
              type="text"
              name="memory_ram"
              placeholder="Memoria RAM"
              value={formData.memory_ram}
              onChange={handleChange}
            />
            <input
              type="text"
              name="color"
              placeholder="Color"
              value={formData.color}
              onChange={handleChange}
            />
            <input
              type="text"
              name="camera"
              placeholder="Cámara"
              value={formData.camera}
              onChange={handleChange}
            />
            <input
              type="text"
              name="screen"
              placeholder="Pantalla"
              value={formData.screen}
              onChange={handleChange}
            />
            <input
              type="text"
              name="battery"
              placeholder="Batería"
              value={formData.battery}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cpu"
              placeholder="Procesador"
              value={formData.cpu}
              onChange={handleChange}
            />
            <input
              type="text"
              name="image"
              placeholder="URL de imagen"
              value={formData.image}
              onChange={handleChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Descripcion"
              value={formData.description}
              onChange={handleChange}
              id="descInput"
            />
            <div className='price-input-container'>
              <span>$</span>
              <input
                type="text"
                name="price"
                placeholder="Precio"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit">Agregar Producto</button>
          </form>
        </div>
      </div>
    </div >
  );
}