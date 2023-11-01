import React, { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [temporaryToken, setTemporaryToken] = useState('');

  // Recuperar el token de sesión al cargar la página
  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem('temporaryToken');
    if (tokenFromLocalStorage) {
      setTemporaryToken(tokenFromLocalStorage);
    }
  }, []);

  const handleLogin = (newToken) => {
    // Almacena el token en localStorage
    localStorage.setItem('temporaryToken', newToken);
    setTemporaryToken(newToken);
  };

  const handleLogout = () => {
    // Elimina el token de localStorage
    localStorage.removeItem('temporaryToken');
    setTemporaryToken('');
  };

  return (
    <GlobalContext.Provider value={{ temporaryToken, handleLogin, handleLogout }}>
      {children}
    </GlobalContext.Provider>
  );
};