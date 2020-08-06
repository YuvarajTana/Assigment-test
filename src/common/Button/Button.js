import React from "react";
import "./button.css";

const Button = (props) => {
  const { handleClick, children } = props;

  // console.log("styles", styles);
  const BaseButton = {
    width: "200px",
    height: "48px",
    borderRadius: "4px",
    backgroundColor: "#3080de",
    color: "#ffffff",
    fontWeigh: "600",
    border: "1px solid #3080de",
    fontSize: "18px",
  };

  return (
    <button style={BaseButton} onClick={handleClick}>
      {children}
    </button>
  );
};
export default Button;
