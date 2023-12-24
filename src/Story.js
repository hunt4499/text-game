// Story.js
import React from 'react';

const Story = ({ index }) => {
  const stories = [
    'Happy Birthday, my love! 🎉🎂',
    'Today is a special day just for you.',
    'I have prepared a little adventure for you to find a special treasure.',
    'Follow the clues and embark on a journey to discover our precious memories!',
    'You find yourself in our favorite park, where our love story began.',
    'There are three paths ahead. Which one will you choose?',
  ];

  return <p>{stories[index]}</p>;
};

export default Story;
