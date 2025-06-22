import { useSwipeable } from 'react-swipeable';
import { browserDetection } from '../utils/browserDetection';

interface SwipeConfig {
  onNext: () => void;
  onPrev: () => void;
  trackMouse?: boolean;
}

export const useSwipeNavigation = ({
  onNext,
  onPrev,
  trackMouse = true,
}: SwipeConfig) => {
  return useSwipeable({
    onSwipedLeft: onNext,
    onSwipedRight: onPrev,
    touchEventOptions: { passive: false },
    // Отключаем отслеживание мыши для Safari на мобильных устройствах
    trackMouse: trackMouse && !(browserDetection.isSafari() && browserDetection.isMobile()),
  });
};
