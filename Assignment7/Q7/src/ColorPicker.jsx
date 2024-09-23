import React from 'react';

const ColorPicker = ({ onColorChange }) => {
  return (
    <div>
      <h3>Pick a color:</h3>
      <input type="color" onChange={(e) => onColorChange(e.target.value)} />
    </div>
  );
};
export default ColorPicker;