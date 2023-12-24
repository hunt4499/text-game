// App.js
import React, { useState } from "react";
import Story from "./Story";
import Choice from "./Choice";
import PhotoTreasure from "./PhotoTreasure";
import "./styles.css";
import backgroundMusic from "./audio/LabyrinthCut.mp3"; // Update with the correct path
import happyMusic from "./audio/Win-music.mp3";

const App = () => {
  const [storyIndex, setStoryIndex] = useState(0);
  const [treasureFound, setTreasureFound] = useState(false);
  const [happySoundPlayed, setHappySoundPlayed] = useState(false);

  const handleChoice = (choiceIndex) => {
    if (choiceIndex === 2) {
      setTreasureFound(true);
      setHappySoundPlayed(false); // Reset the happy sound state
    } else {
      setStoryIndex(choiceIndex);
    }
  };

  const handleReset = () => {
    setStoryIndex(0);
    setTreasureFound(false);
    setHappySoundPlayed(false);
  };

  const handleHappySound = async () => {
    if (!happySoundPlayed) {
      const backgroundMusicAudio = document.getElementById("background-music");
      if (backgroundMusicAudio) {
        backgroundMusicAudio.pause(); // Pause the background music
      }
      var happySoundAudio = new Audio(happyMusic);
      happySoundAudio.type = "audio/mpeg";
      try {
        await happySoundAudio.play();

        console.log("Playing audio" + happySoundAudio);
        happySoundAudio.play();
        setHappySoundPlayed(true);
      } catch (err) {
        console.log("Failed to play, error: " + err);
      }
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
          <PhotoTreasure
            onReset={handleReset}
            onHappySound={handleHappySound}
          />
        )}
      </div>
      <div className="choice">
        <Choice index={storyIndex} onChoice={handleChoice} />
      </div>
    </div>
  );
};

export default App;
