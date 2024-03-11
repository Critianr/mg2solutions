import { useState } from 'react'
import React from 'react';
import hdlogo from '././assets/mdmlogo.png';
import menuimg from '././assets/menu.svg';
import foundimg from './assets/notimg.jpeg';
import logo from './assets/hdlogo.png'
import Intam from './assets/instam-icons.svg'; 
import Fb from './assets/fb-icons.svg'; 
import Whatp from './assets/whatsapp-icons.svg'; 


import './App.css'

function App() {
  
    return (
    <>
    
      <div className='offer'>Visita nuestra última colección.</div>
      <header className='wrp-header'>
        <div className='wrp-logo'>
        <img src={hdlogo} alt="Mi Imagen" />
        </div>
        <div className='wrp-title'>
          <h1 className='title'>2MG SOLUTIONS</h1>
          <span>ACCESORIOS DE JOYERIA</span>
        </div>
        <div className='wrp-follow'>
          {/* <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li> */}
          <span className='menu'><img src={menuimg} alt="" /></span>
        </div>
      </header>
      {/* banner */}
      <div className='gallery'>
        <img src={foundimg} alt="" />
      </div>
      <div className='description'>
      <p> We design durable travel apparelasd th a conscience — 100% made in America. dasroducts 
        by United By Blue. Video by Seth Morrisey.
      </p>
      </div>
      <h2>NUESTRO PRODUCTOS</h2> 
      <div className='wrp-productos'>
            
      <div className="grid-container">
      
      <div className="item">
      <img src={foundimg} alt="Imagen 1" />
      </div>
      <div className="item">
      <img src={foundimg} alt="Imagen 2" />
      </div>

      <div className="item full-width">
      <img src={foundimg} alt="Imagen 3" />
      </div>

      <div className="item">
      <img src={foundimg} alt="Imagen 4" />
      </div>

      <div className="item">
      <img src={foundimg} alt="Imagen 5" />
      </div>

      </div>
    </div>
<footer>  
  <div className='grid-container'>
    <img src={logo} alt="" />
  </div>
  <div className="footer-contacto">
    <p>Don't miss out Subscribe to our mailing list for 
      insider news, product launches, and more.</p>
      <div className='follows'>
        <img src={Intam} alt="" />
        <img src={Fb} alt="" />
        <img src={Whatp} alt="" />
      </div>
  </div>
</footer>
 </>
   

  );
}

export default App;

