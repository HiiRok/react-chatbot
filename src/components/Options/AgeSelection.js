import React from "react";

import "./Options.css";

const AgeSelection = (props) => {
  const ageOptions = Array.from({length: 23}, (_, i) => i + 18); // Creates an array from 18 to 40

  const handleChange = (event) => {
    props.actionProvider.handleAge(event.target.value); 
    
  };

  return (
    <div className="options-container">
      <select onChange={handleChange} className="option-button">
        {ageOptions.map((age, index) => (
          <option key={index} value={age}>
            {age}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AgeSelection;
