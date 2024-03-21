import React from 'react';
import images from '../assets/notimg.jpeg'
function ExampleCarouselImage({ imageUrl, text }) {
    return (
      
        <img src={imageUrl} alt={text} className="d-block w-100" />
      
    );
  }

export default ExampleCarouselImage;
