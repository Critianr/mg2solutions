import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function DesktopNavigation() {
  return (
    <nav className="desktop-nav">
   <img src={logo} alt="" />
    <ul className='nav'>
    <li><Link to="/">Inicio</Link></li>
    <li><Link to="/insignias-militares">Insignias Militares</Link></li>
    <li><Link to="/empresarial">Empresarial</Link></li>
    <li><Link to="/joyeria">Joyeria</Link></li>
    <li><Link to="/medallas">Medallas</Link></li>
    <li><Link to="/pines">Pines</Link></li>
    <li><Link to="/servicios-digitales">Servicios Digitales</Link></li>
    <li><Link to="/contactos">Contactanos</Link></li>
  </ul>
  
  </nav>
  );
}

export {DesktopNavigation};