
import React from 'react';

interface FloatingPhotoProps {
  src: string;
  emoji?: string;
  className: string;
  size: 'small' | 'medium' | 'large';
  emojiPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const FloatingPhoto: React.FC<FloatingPhotoProps> = ({ 
  src, 
  emoji, 
  className, 
  size,
  emojiPosition = 'top-right'
}) => {
  const sizeClasses = {
    small: 'w-16 h-16 md:w-20 md:h-20',
    medium: 'w-20 h-20 md:w-24 md:h-24',
    large: 'w-24 h-24 md:w-32 md:h-32'
  };

  const emojiPositionClasses = {
    'top-left': '-top-2 -left-2',
    'top-right': '-top-2 -right-2',
    'bottom-left': '-bottom-2 -left-2',
    'bottom-right': '-bottom-2 -right-2'
  };

  return (
    <div className={`absolute ${className}`}>
      <div className={`relative ${sizeClasses[size]} rounded-2xl overflow-hidden border-2 border-white`}>
        <img 
          src={src} 
          alt="User photo" 
          className="w-full h-full object-cover"
        />
        {emoji && (
          <div className={`absolute ${emojiPositionClasses[emojiPosition]} text-lg md:text-xl`}>
            {emoji}
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingPhoto;
