import React, { useState } from 'react';

const LikeButton = ({ likeCount = 0 }) => {
  // Initialize state with the likeCount prop, but use likes to manage internally
  const [likes, setLikes] = useState(likeCount);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <p>{likes} Likes</p>
      <button onClick={handleLike}>Like</button>
    </div>
  );
};

export default LikeButton;