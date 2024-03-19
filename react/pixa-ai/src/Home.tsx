import React from "react";
import "./Homestyles.css"; // Import your CSS file
import photo1 from "./assets/images/photo1.jpg";
import photo2 from "./assets/images/photo2.jpg";
import photo3 from "./assets/images/photo3.jpg";
import photo4 from "./assets/images/photo4.jpg";

interface PhotoOptionProps {
  photo: string;
  onSelect: () => void;
  onUpload: () => void;
}

const PhotoOption: React.FC<PhotoOptionProps> = ({
  photo,
  onSelect,
  onUpload,
}) => {
  return (
    <div>
      <img src={photo} alt="Photo" />
      <button onClick={onSelect}>Select</button>
      <button onClick={onUpload}>Upload Your Photo</button>
    </div>
  );
};

function Home() {
  const photos = [photo1, photo2, photo3, photo4];

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">Pixa AI</div>
      </header>

      {/* Generator text */}
      <div className="generator-text">Free AI Image Generator</div>

      {/* Description */}
      <div className="description">
        Choose the styles from below to edit your photos
      </div>

      {/* Photo options container */}
      <div className="photo-options-container">
        {/* Map over photos and render PhotoOption for each photo */}
        {photos.map((photo, index) => (
          <PhotoOption
            key={index}
            photo={photo}
            onSelect={() => {} /* Implement your onSelect logic here */}
            onUpload={() => {} /* Implement your onUpload logic here */}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
