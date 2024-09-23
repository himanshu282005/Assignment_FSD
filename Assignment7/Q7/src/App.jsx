import React, { useState } from 'react';
import ColorPicker from './ColorPicker';

function App() {
  const [selectedColor, setSelectedColor] = useState('#000000');

  return (
    <div>
      <h1>Color Picker</h1>
      <ColorPicker onColorChange={setSelectedColor} />
      <p>Selected Color: <span style={{ color: selectedColor }}>{selectedColor}</span></p>
    </div>
  );
}

export default App;