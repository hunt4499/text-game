// Choice.js
import React from 'react';

const choices = [
  ['Visit the mysterious wizard', 'Search for a magical item yourself'],
  ['Choose the singing flower', 'Choose the talking mirror'],
  ['Go to the Enchanted Garden', 'Go to the Mystic Caves'],
  ['Approach the friendly unicorn', 'Continue exploring on your own'],
  ['Choose the sparkly wrapping paper', 'Choose the elegant silk wrapping paper'],
  ['Continue the journey to the dragon\'s cave', 'Take a break and enjoy the gem'],
  ['Use the gem to distract the dragon', 'Continue to the cave entrance'],
  ['Pick up the gem and keep going', 'Leave the gem and continue'],
  ['Enter the hidden entrance', 'Take a moment to prepare yourself'],
];

const Choice = ({ index, onChoice, showNextButton, onNext, challengeStarted }) => {
  const handleButtonClick = (choiceIndex, event) => {
    event.preventDefault();
    onChoice(choiceIndex);
  };

  return (
    <div>
      {choices[index] && choices[index].map((choice, i) => (
        <button key={i} onClick={(e) => handleButtonClick(i, e)} disabled={challengeStarted || !showNextButton}>
        {choice}
      </button>

      ))}
      {(showNextButton && index !== choices.length - 1) && <button onClick={onNext}>Next</button>}
      {index === choices.length - 1 && !showNextButton && !challengeStarted && (
        <button onClick={() => onChoice(choices.length - 1)}>Start Challenge</button>
      )}
    </div>
  );
};

export default Choice;
