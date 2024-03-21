import React from 'react';
import logo from '../assets/logo.png';

function DesktopNavigation() {
  return (
    <nav className="desktop-nav">
   <img src={logo} alt="" />
    <ul className='nav'>
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Insignias Militares</a></li>
    <li><a href="#">Joyeria</a></li>
    <li><a href="#">Medallas</a></li>
    <li><a href="#">Pines</a></li>
    <li><a href="#">Contactanos</a></li>
  </ul>
  
  </nav>
  );
}

export {DesktopNavigation};