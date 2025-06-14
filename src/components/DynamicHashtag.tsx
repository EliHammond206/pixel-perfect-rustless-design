
import React, { useState, useEffect } from 'react';

interface DynamicHashtagProps {
  isWhiteTheme?: boolean;
}

const DynamicHashtag: React.FC<DynamicHashtagProps> = ({ isWhiteTheme = false }) => {
  const suffixes = ['one', 'day', 'where'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentSuffix = suffixes[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (displayText.length < currentSuffix.length) {
          setDisplayText(currentSuffix.slice(0, displayText.length + 1));
        } else {
          // Long pause before deleting (3 seconds)
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, 3000);
        }
      } else {
        // Deleting phase
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Move to next suffix and pause briefly
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % suffixes.length);
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
          }, 500);
        }
      }
    }, isDeleting ? 80 : 120);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, suffixes, isPaused]);

  const textColor = isWhiteTheme ? 'text-black' : 'text-white';

  return (
    <span className={textColor}>
      #Every{displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default DynamicHashtag;
