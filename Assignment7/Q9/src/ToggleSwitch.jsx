import React from 'react';

const ToggleSwitch = ({ toggleState }) => {
  return (
    <div>
      <button onClick={toggleState}>Toggle</button>
    </div>
  );
};

export default ToggleSwitch;
