// MenuButton.js
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';
import './menu.css';

function MenuButton() {
    // OffCanvasExample
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

  return (
    <>
    {/* <div className={`MenuButton ${isOpen ? 'open' : ''}`} onClick={toggleMenu}> */}
      <div onClick={handleShow} className={`MenuButton ${show ? 'open' : ''}`}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
     <Offcanvas show={show} onHide={handleClose}>
     <Offcanvas.Header closeButton>
       <Offcanvas.Title>2MG SOLUTIONS</Offcanvas.Title>
     </Offcanvas.Header>
     <Offcanvas.Body>
       <div>
        Chequea todos nuestros productos
       </div>
    <ul className='nav-menu'>
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Insignias Militares</a></li>
    <li><a href="#">Joyeria</a></li>
    <li><a href="#">Medallas</a></li>
    <li><a href="#">Pines</a></li>
    <li><a href="#">Contactanos</a></li>
  </ul>

     </Offcanvas.Body>
   </Offcanvas>
   </>
  );
}

export default MenuButton;
