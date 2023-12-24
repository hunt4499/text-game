// App.js
import React, { useState, useEffect, useRef } from "react";
import Story from "./Story";
import Choice from "./Choice";
import PhotoTreasure from "./PhotoTreasure";
import Challenge from "./Challenge";
import "./styles.css";
import backgroundMusic from "./audio/LabyrinthCut.mp3"; // Update with the correct path
import happyMusic from "./audio/Win-music.mp3";

const App = () => {
  const [showNextButton, setShowNextButton] = useState(false);
  const [challengeCompleted, setChallengeCompleted] = useState(false);

  const handleChallengeComplete = () => {
    setChallengeCompleted(true);
  };

  const backgroundMusicRef = useRef(new Audio(backgroundMusic));
  const [storyIndex, setStoryIndex] = useState(0);
  const [treasureFound, setTreasureFound] = useState(false);
  const [happySoundPlayed, setHappySoundPlayed] = useState(false);

  useEffect(() => {
    if (treasureFound && !happySoundPlayed) {
      const backgroundMusicAudio = document.getElementById("background-music");
      if (backgroundMusicAudio) {
        backgroundMusicAudio.pause(); // Pause the background music
      }

      const happySoundAudio = new Audio(happyMusic); // Update with the correct path
      happySoundAudio.play();
      setHappySoundPlayed(true);
    }
  }, [treasureFound, happySoundPlayed]);

  const handleChoice = (choiceIndex) => {
    try {
      // Logic to update the story based on the user's choice
      // You can implement a more complex game logic here
      if (storyIndex === 0) {
        if (choiceIndex === 0) {
          setStoryIndex(1);
        } else if (choiceIndex === 1) {
          setStoryIndex(2);
        }
      } else if (storyIndex === 1) {
        if (choiceIndex === 0) {
          setStoryIndex(3);
        } else if (choiceIndex === 1) {
          setStoryIndex(4);
        }
      } else if (storyIndex === 2) {
        if (choiceIndex === 0) {
          setStoryIndex(5);
        } else if (choiceIndex === 1) {
          setStoryIndex(6);
        }
      } else if (storyIndex === 7 && choiceIndex === 0) { // Check if it's the challenge start choice
        setTreasureFound(true);
      }

      // Add more conditions for other story points as needed

      setShowNextButton(true);
    } catch (error) {
      console.error('Error in handleChoice:', error);
    }
  };

  const handleReset = () => {
    setStoryIndex(0);
    setTreasureFound(false);
    setHappySoundPlayed(false);
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.play(); // Resume background music
    }
    setChallengeCompleted(false); // Add this line to reset the challenge state
    console.log("Game reset");
  };

  const handleNext = () => {
    setStoryIndex(storyIndex + 1);
    setShowNextButton(false);
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
        ) : challengeCompleted ? (
          <PhotoTreasure
            onReset={handleReset}
            backgroundMusicRef={backgroundMusicRef}
          />
        ) : (
          <Challenge onChallengeComplete={handleChallengeComplete} />
        )}
      </div>
      <div className="choice">
        <Choice
          index={storyIndex}
          onChoice={handleChoice}
          showNextButton={showNextButton}
          onNext={handleNext}
          challengeStarted={challengeCompleted} // Pass the challenge state to disable buttons during challenge
        />
      </div>
    </div>
  );
};

export default App;
