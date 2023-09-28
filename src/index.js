import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';

const MainApp = () => {
  const [active, setActive] = useState("home");

  return (
    <div>
      <Navbar setActive={setActive} />
      <App active={active} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);

reportWebVitals();
