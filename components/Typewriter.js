import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 100, onComplete,onStarting }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
        if(onStarting){
            onStarting();
        }
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete(); // Call the onComplete callback when typing is done
    }
  }, [index, text, speed, onComplete]);

  return <p>{displayedText}</p>;
};

export default Typewriter;
