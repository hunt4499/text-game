// Choice.js
import React from 'react';

const choices = [
  ['Take the left path', 'Take the right path', 'Take the middle path'],
  ['Continue walking', 'Take a break and enjoy the view', 'Check your phone for a message'],
  ['Open the small box you found', 'Continue walking', 'Sit on the bench and reminisce'],
  // Add more choices as needed
];

const Choice = ({ index, onChoice }) => {
  const handleButtonClick = (choiceIndex) => {
    onChoice(choiceIndex);
  };

  return (
    <div>
      {choices[index] && choices[index].map((choice, i) => (
        <button key={i} onClick={() => handleButtonClick(i)}>
          {choice}
        </button>
      ))}
    </div>
  );
};

export default Choice;
