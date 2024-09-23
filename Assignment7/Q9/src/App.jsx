import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';

function App() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <div>
      <h1>Toggle Switch</h1>
      <ToggleSwitch toggleState={handleToggle} />
      <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
    </div>
  );
}

export default App;