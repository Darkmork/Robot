
import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, speed = 100, className = "" }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={`${className} after:content-['|'] after:ml-1 after:animate-blink after:font-light`}>
      {displayedText}
    </span>
  );
};

export default TypingAnimation;