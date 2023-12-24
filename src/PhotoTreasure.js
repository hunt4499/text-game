// PhotoTreasure.js
import React, { useState, useEffect, useRef } from 'react';
import PhotoGallery from './PhotoGallery';
import './PhotoTreasure.css';
import happyMusic from "./audio/Win-music.mp3";

const PhotoTreasure = ({ onReset }) => {
  const happySoundRef = useRef(null);

  useEffect(() => {
    happySoundRef.current = new Audio(happyMusic); // Update with the correct path
    return () => {
      if (happySoundRef.current) {
        happySoundRef.current.pause();
        happySoundRef.current.removeEventListener('ended', handleHappySoundEnd);
      }
    };
  }, []);

  const handleHappySoundEnd = () => {
    if (happySoundRef.current) {
      happySoundRef.current.removeEventListener('ended', handleHappySoundEnd);
      onReset();
    }
  };

  const handleReset = () => {
    if (happySoundRef.current) {
      happySoundRef.current.pause();
      happySoundRef.current.currentTime = 0; // Reset the audio to the beginning
    }
    window.location.reload();
    onReset();
  };

  const playHappySound = () => {
    if (happySoundRef.current) {
      happySoundRef.current.addEventListener('ended', handleHappySoundEnd);
      happySoundRef.current.play();
    }
  };

  return (
    <div className="photo-treasure">
      <div className="background-animation" />
      <div className="content-container">
        <p>Congratulations! You've found the treasure!</p>
        <p>Open the treasure chest below to reveal our special memories together:</p>
        <div className="gallery-container">
          <PhotoGallery onHappySound={playHappySound} />
        </div>
        <button onClick={handleReset}>Reset Game</button>
      </div>
    </div>
  );
};

export default PhotoTreasure;
