import React, { useState, useEffect } from 'react';
import Logo from '../../assets/hdlogo.png';
import './ProductCard.css';


function ProductCard({ title, imageUrl }) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <div onClick={handleShow} className={`product-card ${showModal ? 'open' : ''}`}>
        <img src={Logo} alt="" />     
        <h4>Title</h4>
      </div>
      <div className={`modal ${showModal ? 'open' : ''}`}>
        <div>
          <button onClick={handleClose}> x</button>
          <img src={Logo} alt={title} />
          <p>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
          </p>
          <div className="modal-buttons">
              <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="whatsapp-button">WhatsApp</a>
              <a href="tel:+123456789" className="call-button">Llamar</a>
            </div>
        </div>
      </div>
    </>
  );
}

export {ProductCard};
