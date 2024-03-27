// In Testimonials.js

import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import formalImage from "../constants/formal1.jpg";
import scifi from "../constants/sci-fi.png";
import fitness from "../constants/fitness.png";
// Import other image files...

const Testimonials = () => {
  // Function to return image based on style name
  const getImageByStyle = (style) => {
    switch (style) {
      case "Formal":
        return formalImage;
      case "sci-fi":
        return scifi;
      case "fitness":
        return fitness;
      default:
        return null;
    }
  };

  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Unlock Infinite Creativity with Pixa AI's Avatar Customization.
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Dive into boundless possibilities of self-expression with Pixa AI's
            revolutionary avatar customization tool. Whether for virtual
            meetings, social media, gaming, or marketing, Pixa AI empowers you
            to craft personalized avatars with ease. Explore a plethora of
            styles, from classic to futuristic, and unleash your imagination
            with our AI-driven avatar generator.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-center justify-center w-96 h-96 p-4 m-4 rounded-xl border-2 border-gray-300 shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            <img
              src={getImageByStyle(card.style)}
              alt="Style Image"
              className="w-full h-80 object-cover rounded-xl mb-4"
            />{" "}
            {/* Increase the height of the image */}
            <h3 className="text-center font-bold text-white">
              {card.description}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
