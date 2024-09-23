import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <h1>Greeting Component</h1>
      <Greeting name="John" />
      <Greeting name="Jane" />
    </div>
  );
}

export default App;