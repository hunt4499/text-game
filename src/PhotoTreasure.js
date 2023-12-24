// PhotoTreasure.js
import React from 'react';
import PhotoGallery from './PhotoGallery';
import './PhotoTreasure.css';

const PhotoTreasure = ({ onReset }) => {
  return (
    <div className="photo-treasure">
      <p>Congratulations! You've found the treasure!</p>
      <p>Open the treasure chest below to reveal our special memories together:</p>
      <PhotoGallery />
      <button onClick={onReset}>Reset Game</button>
    </div>
  );
};

export default PhotoTreasure;
