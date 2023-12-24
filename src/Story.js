// Story.js
import React from 'react';

const stories = [
  "Happy Birthday, my love! 🎉🎂 Today is a special day just for you. I have prepared a little adventure for you to find a special treasure. Follow the clues and embark on a journey to discover the precious treas! You find yourself in our favorite park, where our love story began.",
  "You hear about a mysterious wizard who can create enchanted gifts. Do you:",
  "The wizard gives you two options: a singing flower or a talking mirror. Which one do you choose?",
  "You choose the singing flower. The wizard tells you it's hidden in a magical garden. Do you:",
  "You decide to search for the singing flower in the Enchanted Garden. As you explore, you encounter a friendly unicorn. Do you:",
  "The unicorn guides you to the singing flower, and you successfully find it. Now, you need to choose a wrapping paper for the gift. Do you:",
  "You choose the talking mirror. The wizard reveals that it's kept in a mysterious cave guarded by a wise dragon. Do you:",
  "You embark on a journey to the dragon's cave. On your way, you find a sparkling gem. Do you:",
  "You find a hidden entrance in the cave, leading to a magical challenge. The challenge awaits you. Are you ready to face it?",
];

const Story = ({ index }) => {
  return <p>{stories[index]}</p>;
};

export default Story;
