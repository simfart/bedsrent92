import React, { useState, useEffect } from 'react';
import { Product } from 'shared/assets/types/product';
import { useSwipeNavigation } from 'shared/hooks/useSwipeNavigation';


import styles from './ProductGallery.module.scss';

interface Props {
  product: Product;
}

export const ProductGallery: React.FC<Props> = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const currentMedia = product.media[currentIndex];

  const handleChange = (index: number) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % product.media.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + product.media.length) % product.media.length,
    );
  };

  const swipeHandlers = useSwipeNavigation({
    onNext: handleNext,
    onPrev: handlePrev,
  });

  if (!isHydrated) {
    return (
      <div className={styles.galleryContainer}>
        <div className={styles.infoPanel}>
          <h3>{product.name}</h3>
          <div className={styles.price}>{product.price}</div>
          <p>{product.description}</p>
        </div>
      </div>
    );
  }

  // 🔁 Основной интерактивный UI после гидрации
  return (
    <div
      className={styles.galleryContainer}
      role="region"
      aria-label="Галерея продукта"
    >
      <div className={styles.thumbnailList}>
        {product.media.map((item, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className={`${styles.thumbnailWrapper} ${
                isActive ? styles.active : ''
              }`}
              onClick={() => handleChange(index)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  className={styles.thumbnail}
                  alt={item.altLabel}
                  loading="lazy"
                />
              ) : (
                <div className={styles.videoThumbnailContainer}>
                  <video
                    src={item.src}
                    className={styles.thumbnail}
                    muted
                    poster={item.poster || item.src}
                  />
                  <div className={styles.playIcon}>▶</div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.mainViewer}>
        <button
          onClick={handlePrev}
          className={styles.navButton}
          aria-label="Предыдущее изображение"
        >
          &#10094;
        </button>

        <div {...swipeHandlers} className={styles.mediaWrapper}>
          {currentMedia.type === 'image' ? (
            <img src={currentMedia.src} className={styles.mainMedia} alt="" />
          ) : (
            <video
              src={currentMedia.src}
              controls
              className={styles.mainMedia}
              poster={currentMedia.poster || currentMedia.src}
            />
          )}
        </div>

        <button
          onClick={handleNext}
          className={styles.navButton}
          aria-label="Следующее изображение"
        >
          &#10095;
        </button>
      </div>

      <div className={styles.infoPanel}>
        <h3>{product.name}</h3>
        <div className={styles.price}>{product.price}</div>
        <p>{product.description}</p>
      </div>
    </div>
  );
};
