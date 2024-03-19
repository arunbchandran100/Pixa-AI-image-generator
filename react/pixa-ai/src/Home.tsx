import React from "react";
import "./Homestyles.css"; // Import your CSS file
import photo1 from "./assets/images/photo1.jpg";
import photo2 from "./assets/images/photo2.jpg";
import photo3 from "./assets/images/photo3.jpg";
import photo4 from "./assets/images/photo4.jpg";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

interface PhotoOptionProps {
  photo: string;
}

const PhotoOption: React.FC<PhotoOptionProps> = ({ photo }) => {
  const navigate = useNavigate(); // Use useNavigate hook

  const handleClick = () => {
    navigate("/upload"); // Navigate to the upload page when clicked
  };

  return (
    <div className="photo-option" onClick={handleClick}>
      {" "}
      {/* Add onClick handler to the container */}
      <img src={photo} alt="Photo" />
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
          <PhotoOption key={index} photo={photo} />
        ))}
      </div>
      {/* Footer */}
      <footer className="footer">
        <div>About</div>
        <div>Services</div>
        <div>Contact</div>
        {/* Add other basic things */}
      </footer>
    </div>
  );
}

export default Home;
