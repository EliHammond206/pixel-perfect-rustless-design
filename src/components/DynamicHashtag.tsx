
import React, { useState, useEffect } from 'react';

const DynamicHashtag = () => {
  const hashtags = ['Everyone', 'Everyday', 'Everywhere'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('Everyone');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentHashtag = hashtags[currentIndex];
      
      if (!isDeleting) {
        // Typing phase
        if (displayText.length < currentHashtag.length) {
          setDisplayText(currentHashtag.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting phase
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Move to next hashtag
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % hashtags.length);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearInterval(interval);
  }, [displayText, isDeleting, currentIndex, hashtags]);

  return (
    <span className="text-foreground">
      #{displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default DynamicHashtag;
