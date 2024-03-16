// MenuButton.js
import Button from 'react-bootstrap/Button';
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
         Contenido del menú aquí
       </div>
     </Offcanvas.Body>
   </Offcanvas>
   </>
  );
}

export default MenuButton;
