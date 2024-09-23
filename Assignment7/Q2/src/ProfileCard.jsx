import React from 'react';

const ProfileCard = ({ name, age, location }) => {
  return (
    <div className="profile-card" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', width: '200px' }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default ProfileCard;

// App.js
