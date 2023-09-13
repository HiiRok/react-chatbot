import React, { useState } from "react";
import "./Options.css";

const Options = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const options = [
    {
      text: "Got it!",
      handler: () => {
        props.actionProvider.handleGotIt();
        setIsVisible(false);
      },
      id: 1,
    },
  ];

  const buttonsMarkup = options.map(
    (option) =>
      isVisible && (
        <button
          key={option.id}
          onClick={option.handler}
          className="option-button"
        >
          {option.text}
        </button>
      )
  );

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
