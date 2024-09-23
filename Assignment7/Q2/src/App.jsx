import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div>
      <h1>Profile Card</h1>
      <ProfileCard name="John Doe" age={28} location="New York" />
    </div>
  );
}

export default App;