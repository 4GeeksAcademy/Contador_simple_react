import React from 'react';

const SimpleCounter = ({ digitOne, digitTwo, digitThree, digitFour }) => {
  return (
    <div className="counter">
      <span className="digit">{digitFour}</span>
      <span className="digit">{digitThree}</span>
      <span className="digit">{digitTwo}</span>
      <span className="digit">{digitOne}</span>
    </div>
  );
};

export default SimpleCounter;