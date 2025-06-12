
import React, { useState, useEffect } from 'react';

const DynamicHashtag = () => {
  const hashtags = ['Everyone', 'Everyday', 'Everywhere'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentHashtag = hashtags[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (displayText.length < currentHashtag.length) {
          setDisplayText(currentHashtag.slice(0, displayText.length + 1));
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
          // Move to next hashtag and pause briefly
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % hashtags.length);
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
          }, 500);
        }
      }
    }, isDeleting ? 80 : 120);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, hashtags, isPaused]);

  return (
    <span className="text-white">
      #{displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default DynamicHashtag;
