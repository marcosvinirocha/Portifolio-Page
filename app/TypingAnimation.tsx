
'use client';

import React, { useState, useEffect } from 'react';
import './TypingAnimation.css';

const TypingAnimation = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="typing-container">
      <h1 className="typing-text">{displayedText}</h1>
    </div>
  );
};

export default TypingAnimation;
