import React from 'react';

interface PhotoOptionProps {
  photo: string;
  onSelect: () => void;
  onUpload: () => void;
}

const PhotoOption: React.FC<PhotoOptionProps> = ({ photo, onSelect, onUpload }) => {
  return (
    <div>
      <img src={photo} alt="Photo" />
      <button onClick={onSelect}>Select</button>
      <button onClick={onUpload}>Upload Your Photo</button>
    </div>
  );
}

export default PhotoOption;
