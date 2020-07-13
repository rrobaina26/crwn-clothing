import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, invert, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${invert ? "invert" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
