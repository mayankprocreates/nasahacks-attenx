import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  placeholder?: string;
  sizes?: string;
  webpSrc?: string; // Optional WebP version for better compression
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  priority = false,
  onLoad,
  onError,
  placeholder,
  sizes,
  webpSrc,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return; // Skip lazy loading for priority images

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px', // Start loading 100px before image comes into view
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div ref={imgRef} className={cn('relative overflow-hidden', className)}>
      {/* Placeholder/skeleton while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 animate-pulse">
          {placeholder && (
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-4xl">
              {placeholder}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700/50 to-transparent animate-shimmer" />
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-400">
          <div className="text-center">
            <div className="text-2xl mb-2">⚠️</div>
            <div className="text-sm">Failed to load image</div>
          </div>
        </div>
      )}

      {/* Actual image with WebP support */}
      {(isInView || priority) && (
        <>
          {webpSrc ? (
            <picture>
              <source srcSet={webpSrc} type="image/webp" />
              <img
                src={src}
                alt={alt}
                className={cn(
                  'transition-all duration-500 ease-out',
                  isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105',
                  className
                )}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                onLoad={handleLoad}
                onError={handleError}
                sizes={sizes}
                {...props}
              />
            </picture>
          ) : (
            <img
              src={src}
              alt={alt}
              className={cn(
                'transition-all duration-500 ease-out',
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105',
                className
              )}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              onLoad={handleLoad}
              onError={handleError}
              sizes={sizes}
              {...props}
            />
          )}
        </>
      )}
    </div>
  );
};

export default OptimizedImage;