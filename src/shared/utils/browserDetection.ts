// Безопасное определение браузеров
export const browserDetection = {
  isSafari: () => {
    if (typeof window === 'undefined') return false;
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  },
  
  isChrome: () => {
    if (typeof window === 'undefined') return false;
    return /chrome/i.test(navigator.userAgent) && !/edge/i.test(navigator.userAgent);
  },
  
  isFirefox: () => {
    if (typeof window === 'undefined') return false;
    return /firefox/i.test(navigator.userAgent);
  },
  
  isEdge: () => {
    if (typeof window === 'undefined') return false;
    return /edge/i.test(navigator.userAgent);
  },
  
  isMobile: () => {
    if (typeof window === 'undefined') return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
}; 