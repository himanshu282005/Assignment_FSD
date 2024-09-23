import React from 'react';
import StatusMessage from './StatusMessage';

function App() {
  return (
    <div>
      <h1>Status Message</h1>
      <StatusMessage status="success" />
      <StatusMessage status="error" />
    </div>
  );
}

export default App;