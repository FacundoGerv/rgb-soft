import React, { createContext, useContext, useState, useEffect } from 'react';
import db from "./TempData.json";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [temporaryToken, setTemporaryToken] = useState('');
  const [jsonData, setJsonData] = useState(db); // Cargar los datos directamente desde el archivo JSON

  const [groupedProducts, setGroupedProducts] = useState({}); // Objeto para agrupar los productos por categoría

  useEffect(() => {

    const grouped = jsonData.product.reduce((result, product) => {
      const category = product.category;
      if (!result[category]) {
        result[category] = [];
      }
      result[category].push(product);
      return result;
    }, {});

    setGroupedProducts(grouped);
  }, [jsonData]);

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
};
