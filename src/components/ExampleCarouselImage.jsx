import React from 'react';
import images from '../assets/notimg.jpeg'
function ExampleCarouselImage({ imageUrl, text }) {
    return (
      <div>
        <img src={imageUrl} alt={text} className="d-block w-100" />
      </div>
    );
  }

export default ExampleCarouselImage;
