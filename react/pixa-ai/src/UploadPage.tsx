import "./UploadPage.css";

import React, { useState } from "react";

const UploadPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = () => {
    // Implement upload functionality here
    console.log("Uploaded file:", file);
    // Add logic to generate AI image here
  };

  return (
    <div className="upload-page-container">
      <h2 className="upload-heading">Upload Your Photo</h2>
      <div className="upload-form-container">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="file-input"
        />
        <button
          onClick={handleUpload}
          disabled={!file}
          className="upload-button"
        >
          Generate AI Image
        </button>
      </div>
    </div>
  );
};

export default UploadPage;
