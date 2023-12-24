// PhotoGallery.js
import React, { useState, useEffect } from "react";
import "./PhotoGallery.css";

const photos = [
  // Add your photo URLs here
  "https://photos.app.goo.gl/31PuV1mdd3uaEBby8",
  "url_to_photo_2.jpg",
  "url_to_photo_3.jpg",
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
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`Photo ${index + 1}`}
          referrerpolicy="no-referrer"
          className={index === currentPhotoIndex ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default PhotoGallery;
