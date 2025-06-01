import { FC } from 'react';
import styles from './Footer.module.scss';
import { mailIcon, phoneIcon, telegramIcon } from 'shared/assets/images';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer} id="contacts">
      <div className={styles.contacts}>
        <a href="tel:+79789410960" className={styles.contactItem}>
          <img src={phoneIcon} alt="Phone" />
          <span>+7 (978) 941-09-60</span>
        </a>
        <a href="mailto:contact@arendamed82.ru" className={styles.contactItem}>
          <img src={mailIcon} alt="Email" />
          <span>contact@arendamed82.ru</span>
        </a>
        <a
          href="https://t.me/rental_honey_bed"
          className={styles.contactItem}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={telegramIcon} alt="Telegram" />
          <span>@rental_honey_bed</span>
        </a>
      </div>
    </footer>
  );
};
