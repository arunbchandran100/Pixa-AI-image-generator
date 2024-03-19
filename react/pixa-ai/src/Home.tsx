import React from 'react';
import PhotoOption from './PhotoOption'; // Import PhotoOption component
import './Homestyles.css'; // Import your CSS file
import photo1 from './assets/images/photo1.jpg';
import photo2 from './assets/images/photo2.jpg';
import photo3 from './assets/images/photo3.jpg';
import photo4 from './assets/images/photo4.jpg';

function Home() {
  const photos = [photo1, photo2, photo3, photo4];

  return (
    <div>
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
  );
}

export default Home;
