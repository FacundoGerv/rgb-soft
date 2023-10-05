import './styles/App.css';
import React from 'react';
import Home from './ProductViews/Home';
import Iphone from './ProductViews/iphone';
import Airpods from './ProductViews/airpods';
import Applewatch from './ProductViews/applewatch';
import Accesorios from './ProductViews/accesorios';
import Cargadores from './ProductViews/cargadores';

export default function App(props) {

  return (
    <div className="App">
      
      <section className="App-content">
        <div>
          {props.active === "home" && <Home/>}
          {props.active === "iphone" && <Iphone/>}
          {props.active === "airpods" && <Airpods/>}
          {props.active === "applewatch" && <Applewatch/>}
          {props.active === "accesorios" && <Accesorios/>}
          {props.active === "cargadores" && <Cargadores/>}
         
        </div>
      </section>
    </div>
  );
}
