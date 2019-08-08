import React from "react";
import "./PhotoSection.scss";

const PhotoSection = props => {
  return (
    <div className="photo-section">
      <div className="text">
        <div className="title">THIS IS A GOOD TITLE</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </div>

        <div className="start-button">Let's Start</div>
      </div>
    </div>
  );
};

export default PhotoSection;
