// PhotoTreasure.js
import React from 'react';
import './PhotoTreasure.css';

const PhotoTreasure = ({ onReset, onHappySound }) => {
  return (
    <div className="photo-treasure">
      <p>Congratulations! You've found the treasure!</p>
      <p>Open the treasure chest below to reveal our special memories together:</p>
      {/* Add a component or logic to display the photo treasure */}
      <button onClick={() => { onHappySound(); onReset(); }}>Reset Game</button>
    </div>
  );
};

export default PhotoTreasure;
