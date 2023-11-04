import React, { useState } from 'react';
import './../styles/addprod.css';

export default function AddProduct() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    memory_ram: "",
    color: "",
    camera: "",
    screen: "",
    battery: "",
    cpu: "",
    image: "",
    description: "",
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
  };

  return (
    <div className='container'>
      <div className='size'>
        <div className='inner-content'>
          <h1>Añadir Producto</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Título"
              value={formData.title}
              onChange={handleChange}
            />
            <input
              type="text"
              name="category"
              placeholder="Categoría"
              value={formData.category}
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
              placeholder="Descripción"
              value={formData.description}
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Precio"
              value={formData.price}
              onChange={handleChange}
            />
            <button type="submit">Agregar Producto</button>
          </form>
        </div>
      </div>
    </div>
  );
}
