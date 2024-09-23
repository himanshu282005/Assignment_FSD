import React, { useState, useEffect } from 'react';

const Timer = ({ start }) => {
  const [time, setTime] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div>
      <h2>Time: {time} seconds</h2>
    </div>
  );
};

export default Timer;