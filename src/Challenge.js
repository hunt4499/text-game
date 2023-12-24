// Challenge.js
import React, { useState, useEffect } from 'react';
import froggoImg from './dogpics/froggo-real.jpg'

const Challenge = ({ onChallengeComplete }) => {
  const [frogHits, setFrogHits] = useState(0);
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // Set an initial time limit (in seconds)
  const [dogImageUrl, setDogImageUrl] = useState(null);

  useEffect(() => {
    // Check if the time is up or user has been hit by the Frog 5 times
    if (timeLeft === 0 || frogHits >= 5) {
      setChallengeCompleted(true);
      if (frogHits >= 5) {
        // Fetch a random dog image when the user is defeated
        fetchRandomDogImage();
      }
      onChallengeComplete();
    }

    // Decrease the time every second
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => Math.max(0, prevTime - 1));
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [timeLeft, frogHits, onChallengeComplete]);

  const handleFrogClick = () => {
    setFrogHits((prevHits) => prevHits + 1);
  };

  const fetchRandomDogImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImageUrl(data.message);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  return (
    <div>
      {challengeCompleted ? (
        dogImageUrl ? (
          <div>
            <p>Oops! You got hit by the Frog too many times. Here's a random dog photo for you.</p>
            {/* Display the random dog photo */}
            <img src={dogImageUrl} alt="Random Dog" />
          </div>
        ) : (
          <p>Challenge Completed! You can now access the treasure.</p>
        )
      ) : (
        <div>
          <p>Defeat the evil Frog to unlock the treasure!</p>
          <p>Frog Hits: {frogHits}</p>
          <p>Time Left: {timeLeft} seconds</p>
          {/* Display the Froggo image */}
          <img src={froggoImg} alt="Froggo" width={400} height={400}/>
          {/* Frog challenge elements and logic */}
          <button onClick={handleFrogClick} disabled={timeLeft === 0}>
            Hit the Frog
          </button>
        </div>
      )}
    </div>
  );
};

export default Challenge;
