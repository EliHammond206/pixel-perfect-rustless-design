
import React from 'react';

interface FloatingPhotoProps {
  src: string;
  emoji?: string;
  className: string;
  size: 'small' | 'medium' | 'large' | 'desktop-round' | 'desktop-tiktok' | 'mobile-round' | 'mobile-tiktok' | 'mobile-large-round';
  emojiPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  isRectangular?: boolean;
  style?: React.CSSProperties;
}

const FloatingPhoto: React.FC<FloatingPhotoProps> = ({ 
  src, 
  emoji, 
  className, 
  size,
  emojiPosition = 'top-right',
  isRectangular = false,
  style
}) => {
  const sizeClasses = {
    small: isRectangular ? 'w-16 h-20 md:w-20 md:h-28' : 'w-16 h-16 md:w-20 md:h-20',
    medium: isRectangular ? 'w-20 h-28 md:w-24 md:h-32' : 'w-20 h-20 md:w-24 md:h-24',
    large: isRectangular ? 'w-24 h-32 md:w-32 md:h-44' : 'w-24 h-24 md:w-32 md:h-32',
    'desktop-round': 'w-[150px] h-[150px]',
    'desktop-tiktok': 'w-[187px] h-[266px]',
    'mobile-round': 'w-[100px] h-[100px]',
    'mobile-tiktok': 'w-[142px] h-[192px]',
    'mobile-large-round': 'w-[150px] h-[150px]'
  };

  const emojiPositionClasses = {
    'top-left': '-top-2 -left-2',
    'top-right': '-top-2 -right-2',
    'bottom-left': '-bottom-2 -left-2',
    'bottom-right': '-bottom-2 -right-2'
  };

  const borderRadius = isRectangular ? 'rounded-2xl' : 'rounded-full';

  const emojiSize = size.includes('desktop') ? 'text-[96px]' : 'text-[60px]';

  return (
    <div className={`absolute ${className}`} style={style}>
      <div className={`relative ${sizeClasses[size]} ${borderRadius} overflow-hidden border-2 border-white`}>
        <img 
          src={src} 
          alt="User photo" 
          className="w-full h-full object-cover"
        />
        {emoji && (
          <div className={`absolute ${emojiPositionClasses[emojiPosition]} ${emojiSize} z-10`}>
            {emoji}
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingPhoto;
