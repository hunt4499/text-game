// Challenge.js
import React, { useState, useEffect } from "react";
import froggoImg from "./dogpics/froggo-real.jpg";
import horrorMusic from "./audio/horror.mp3";

const Challenge = ({ onChallengeComplete }) => {
  const [frogHits, setFrogHits] = useState(0);
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); // Set an initial time limit (in seconds)
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [menacingMusic, setMenacingMusic] = useState(false);

  useEffect(() => {
    const frogHitTimer = setInterval(() => {
      // Simulate Frog hitting back randomly
      if (Math.random() < 0.3) {
        setFrogHits((prevHits) => prevHits + 1);
      }
    }, 2000); // Adjust the interval as needed

    const mainTimer = setInterval(() => {
      // Check if the time is up
      if (timeLeft === 0) {
        setChallengeCompleted(true);
        setMenacingMusic(false);
        fetchRandomDogImage();
        onChallengeComplete(dogImageUrl);
      } else {
        setTimeLeft((prevTime) => prevTime - 1);
      }
    }, 1000);

    // Play menacing music when the challenge starts
    setMenacingMusic(true);

    // Cleanup timers on component unmount
    return () => {
      clearInterval(frogHitTimer);
      clearInterval(mainTimer);
    };
  }, [timeLeft, onChallengeComplete, dogImageUrl]);

  const handleFrogClick = () => {
    setFrogHits((prevHits) => prevHits + 1);
  };

  const fetchRandomDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImageUrl(data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  };

  return (
    <div>
      {challengeCompleted ? (
        dogImageUrl ? (
          <div>
            <p>Time's up! Here's a random dog photo for you.</p>
            {/* Display the random dog photo */}
            <img
              src={dogImageUrl}
              alt="Random Dog"
              style={{ width: "200px", height: "200px" }}
            />
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
          <img src={froggoImg} alt="Froggo" width={400} height={300} />
          {/* Frog challenge elements and logic */}
          <button onClick={handleFrogClick} disabled={timeLeft === 0}>
            Hit the Frog
          </button>
        </div>
      )}
      {menacingMusic && (
        // Play menacing music during the challenge
        <audio autoPlay loop>
          <source src={horrorMusic} type="audio/mpeg" />
        </audio>
      )}
    </div>
  );
};

export default Challenge;
