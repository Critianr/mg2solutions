import React, { useState, useEffect } from 'react';
import Logo from '../../assets/hdlogo.png';
import './ProductCard.css';



function ProductCard({ title, img, detailsProduct, description  }) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <div onClick={handleShow} className={`product-card ${showModal ? 'open' : ''}`}>
        <img src={img} alt="" />     
        <h4>Title</h4>
      </div>
      <div className={`modal ${showModal ? 'open' : ''}`}>
        <div>
          <button onClick={handleClose}> x</button>
          <img src={img} alt={title} />
          <h2>{description}</h2>
          <p>
          {detailsProduct}
          </p>
          <div className="modal-buttons">
          <a href="https://api.whatsapp.com/send?phone=+573214298999&text=Me%20interesa%20este%20producto:%20PRODUCTO" target="_blank" rel="noopener noreferrer"></a>
              {/* <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="whatsapp-button">WhatsApp</a> */}
              <a href="tel:+123456789" className="call-button">Llamar</a>
            </div>
        </div>
      </div>
    </>
  );
}

export {ProductCard};
