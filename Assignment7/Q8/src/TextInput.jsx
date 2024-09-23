import React, { useState } from 'react';

const TextInput = ({ onTextChange }) => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
    onTextChange(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
    </div>
  );
};

export default TextInput;