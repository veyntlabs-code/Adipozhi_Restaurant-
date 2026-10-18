'use client';
import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  wrapperClassName?: string;
  enableBlurLoading?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  fallbackSrc = '/images/hero/hero_video_poster.jpg',
  alt = 'Adipozhi Restaurant',
  className = '',
  wrapperClassName = '',
  enableBlurLoading = true,
  onLoad,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>((src as string) || fallbackSrc || '');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  React.useEffect(() => {
    setImgSrc((src as string) || fallbackSrc || '');
    setIsLoaded(false);
    setHasError(false);
  }, [src, fallbackSrc]);

  const handleError = () => {
    if (!hasError && fallbackSrc && imgSrc !== fallbackSrc) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    } else {
      setIsLoaded(true);
    }
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(e);
    }
  };

  if (!enableBlurLoading) {
    return (
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        referrerPolicy="no-referrer"
        className={className}
        {...props}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Shimmer skeleton & warm blur placeholder while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8efdc] via-[#f1dfba] to-[#f8efdc] animate-pulse z-10 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#de2b2b]/30 border-t-[#de2b2b] animate-spin" />
        </div>
      )}
      
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleImageLoad}
        referrerPolicy="no-referrer"
        className={`${className} transition-all duration-700 ease-out ${
          isLoaded 
            ? 'opacity-100 blur-0 scale-100' 
            : 'opacity-0 blur-md scale-105'
        }`}
        {...props}
      />
    </div>
  );
};
