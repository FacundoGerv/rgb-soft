import React, { createContext, useContext, useState, useEffect } from 'react';
import db from "./TempData.json"
import axios from "axios";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);
export const GlobalProvider = ({ children }) => {
  const [temporaryToken, setTemporaryToken] = useState('');
  const [jsonData, setJsonData] = useState({ products: [] }); // Cargar los datos directamente desde el archivo JSON

  const [groupedProducts, setGroupedProducts] = useState({}); // Objeto para agrupar los productos por categoría

  useEffect(() => {
    axios.get('http://localhost:8080/product/get')
      .then((response) => {
        console.log(response.data);
        const products = response.data.map(item => item); // Copiar response.data en una nueva array "products"
        setJsonData({ products });

        // Realizar la agrupación después de actualizar jsonData
        const grouped = products.reduce((result, product) => {
          const category = product.category;
          if (!result[category]) {
            result[category] = [];
          }
          result[category].push(product);
          return result;
        });

        setGroupedProducts(grouped);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleLogin = (newToken) => {
    localStorage.setItem('temporaryToken', newToken);
    setTemporaryToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('temporaryToken');
    setTemporaryToken('');
  };

  return (
    <GlobalContext.Provider value={{ temporaryToken, jsonData, groupedProducts, handleLogin, handleLogout }}>
      {children}
    </GlobalContext.Provider>
  );
}
