// App.js
import React, { useState, useEffect, useRef } from 'react';
import Story from './Story';
import Choice from './Choice';
import PhotoTreasure from './PhotoTreasure';
import './styles.css';
import backgroundMusic from "./audio/LabyrinthCut.mp3"; // Update with the correct path
import happyMusic from "./audio/Win-music.mp3";

const App = () => {
  const backgroundMusicRef = useRef(new Audio(backgroundMusic));
  const [storyIndex, setStoryIndex] = useState(0);
  const [treasureFound, setTreasureFound] = useState(false);
  const [happySoundPlayed, setHappySoundPlayed] = useState(false);

  useEffect(() => {
    if (treasureFound && !happySoundPlayed) {
      const backgroundMusicAudio = document.getElementById('background-music');
      if (backgroundMusicAudio) {
        backgroundMusicAudio.pause(); // Pause the background music
      }

      const happySoundAudio = new Audio(happyMusic); // Update with the correct path
      happySoundAudio.play();
      setHappySoundPlayed(true);
    }
  }, [treasureFound, happySoundPlayed]);

  const handleChoice = (choiceIndex) => {
    if (choiceIndex === 2) {
      setTreasureFound(true);
    } else {
      setStoryIndex(choiceIndex);
    }
  };

  const handleReset = () => {
    setStoryIndex(0);
    setTreasureFound(false);
    setHappySoundPlayed(false);
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.play(); // Resume background music
    }
    console.log('Game reset');
  };

  return (
    <div className="container">
      <audio autoPlay loop id="background-music">
        <source src={backgroundMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="story" id="story-container">
        {!treasureFound ? (
          <Story index={storyIndex} />
        ) : (
          <PhotoTreasure onReset={handleReset} backgroundMusicRef={backgroundMusicRef} />
        )}
      </div>
      <div className="choice">
        <Choice index={storyIndex} onChoice={handleChoice} />
      </div>
    </div>
  );
};

export default App;
