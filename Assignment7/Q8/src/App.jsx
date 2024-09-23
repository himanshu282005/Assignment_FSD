import React, { useState } from 'react';
import TextInput from './TextInput';

function App() {
  const [text, setText] = useState('');

  return (
    <div>
      <h1>Text Input</h1>
      <TextInput onTextChange={setText} />
      <p>Current Text: {text}</p>
    </div>
  );
}

export default App;