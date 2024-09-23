import React from 'react';
import Timer from './Timer';

function App() {
  return (
    <div>
      <h1>Timer Component</h1>
      <Timer start={60} />
    </div>
  );
}

export default App;