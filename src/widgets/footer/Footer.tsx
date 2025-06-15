import { FC } from 'react';
import styles from './Footer.module.scss';
import { mailIcon, phoneIcon } from 'shared/assets/images';
import { Link } from 'react-router-dom';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer} id="contacts">
      <div className={styles.contacts}>
        <a href="tel:+79789410960" className={styles.contactItem}>
          <img src={phoneIcon} alt="Phone" />
          <span>+7 (978) 941-09-60</span>
        </a>
        <a href="mailto:contact@arendamed92.ru" className={styles.contactItem}>
          <img src={mailIcon} alt="Email" />
          <span>contact@arendamed92.ru</span>
        </a>
        <Link to="/privacy-policy" className={styles.footerLink}>
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  );
};
