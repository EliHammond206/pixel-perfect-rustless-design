
import React from 'react';

interface FloatingPhotoProps {
  src: string;
  emoji?: string;
  className: string;
  size: 'small' | 'medium' | 'large' | 'desktop-round' | 'desktop-tiktok' | 'mobile-round' | 'mobile-tiktok' | 'mobile-large-round';
  emojiPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  isRectangular?: boolean;
  style?: React.CSSProperties;
  rotation?: 'left' | 'right' | 'none';
}

const FloatingPhoto: React.FC<FloatingPhotoProps> = ({ 
  src, 
  emoji, 
  className, 
  size,
  emojiPosition = 'top-right',
  isRectangular = false,
  style,
  rotation = 'none'
}) => {
  const sizeClasses = {
    small: isRectangular ? 'w-12 h-16 md:w-16 md:h-22' : 'w-12 h-12 md:w-16 md:h-16',
    medium: isRectangular ? 'w-16 h-22 md:w-20 md:h-28' : 'w-16 h-16 md:w-20 md:h-20',
    large: isRectangular ? 'w-20 h-28 md:w-28 md:h-38' : 'w-20 h-20 md:w-28 md:h-28',
    'desktop-round': 'w-[120px] h-[120px]',
    'desktop-tiktok': 'w-[150px] h-[213px]',
    'mobile-round': 'w-[80px] h-[80px]',
    'mobile-tiktok': 'w-[114px] h-[154px]',
    'mobile-large-round': 'w-[120px] h-[120px]'
  };

  const emojiPositionClasses = {
    'top-left': '-top-2 -left-2',
    'top-right': '-top-2 -right-2',
    'bottom-left': '-bottom-2 -left-2',
    'bottom-right': '-bottom-2 -right-2'
  };

  const rotationClasses = {
    'left': 'rotate-[10deg]',
    'right': 'rotate-[-10deg]',
    'none': ''
  };

  const borderRadius = isRectangular ? 'rounded-2xl' : 'rounded-full';

  const emojiSize = size.includes('desktop') ? 'text-[76px]' : 'text-[48px]';

  return (
    <div className={`absolute ${className}`} style={style}>
      <div className={`relative ${sizeClasses[size]} ${borderRadius} ${rotationClasses[rotation]} overflow-hidden border-2 border-white`}>
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
