// Image optimization utilities

export const getOptimizedImageUrl = (originalUrl: string, width?: number, quality?: number): string => {
  // For now, return original URL
  // In production, you could integrate with services like Cloudinary, ImageKit, etc.
  return originalUrl;
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const createImageSrcSet = (baseUrl: string): string => {
  // Generate srcset for responsive images
  return `${baseUrl} 1x, ${baseUrl} 2x`;
};

export const isImageInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (callback: (entries: IntersectionObserverEntry[]) => void) => {
  const options = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
  };

  return new IntersectionObserver(callback, options);
};
