import React from 'react';
import LikeButton from './LikeButton';

function App() {
  return (
    <div>
      <h1>Like Button</h1>
      <LikeButton likeCount={5} />
    </div>
  );
}

export default App;