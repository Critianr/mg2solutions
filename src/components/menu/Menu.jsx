// MenuButton.js
import React, { useState } from 'react';
import './menu.css';

function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`MenuButton ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
}

export default MenuButton;
