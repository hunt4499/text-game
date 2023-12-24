// App.js
import React, { useState, useEffect } from 'react';
import Story from './Story';
import Choice from './Choice';
import PhotoTreasure from './PhotoTreasure';
import './styles.css';
import backgroundMusic from "./audio/LabyrinthCut.mp3"; // Update with the correct path
import happyMusic from "./audio/Win-music.mp3";

const App = () => {
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
    const backgroundMusicAudio = document.getElementById('background-music');
    if (backgroundMusicAudio) {
      backgroundMusicAudio.play(); // Resume the background music
    }
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
          <PhotoTreasure onReset={handleReset} />
        )}
      </div>
      <div className="choice">
        <Choice index={storyIndex} onChoice={handleChoice} />
      </div>
    </div>
  );
};

export default App;
