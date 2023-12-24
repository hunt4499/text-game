// PhotoGallery.js
import React, { useState, useEffect } from "react";
import "./PhotoGallery.css";
import firstPhoto from "./images/1.jpg";
import secondPhoto from "./images/2.jpg";
import thirdPhoto from "./images/3.jpg";
import fourthPhoto from "./images/4.jpg";
import fifthPhoto from "./images/5.jpg";
import sixthPhoto from "./images/6.jpg";
import seventhPhoto from "./images/7.jpg";

const photos = [
  // Add your photo URLs here
  firstPhoto,
  secondPhoto,
  thirdPhoto,
  fourthPhoto,
  fifthPhoto,
  sixthPhoto,
  seventhPhoto,
  // Add more photo URLs as needed
];

const PhotoGallery = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000); // Change the interval as needed (milliseconds)

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className="photo-gallery">
      {photos.map((imageUrl, index) => (
        <div key={index} className="image-container">
          <img
            key={index}
            src={imageUrl}
            alt={`Photo ${index + 1}`}
            className={index === currentPhotoIndex ? "active" : ""}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
