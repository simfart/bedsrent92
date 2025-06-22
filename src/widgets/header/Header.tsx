import { FC, useEffect, useRef, useState } from 'react';
import { logoImg, phoneLightIcon } from 'shared/assets/images';
import { Link } from 'shared/ui/Link';
import styles from './Header.module.scss';

export const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !target.closest('[data-burger]')
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerContainer}>
          <Link to="/" className={styles.logo}>
            <img src={logoImg} alt="Логотип" />
            <div className={styles['logo-title']}>МедЮг АРЕНДА</div>
          </Link>

          <nav className={styles.desktopMenu}>
            <ul>
              <li>
                <Link
                  to="/#main"
                  aria-label="Переход на главную страницу"
                >
                  Главная
                </Link>
              </li>

              <li>
                <Link
                  to="/#products"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Переход к вариантам аренды"
                >
                  Выбор кровати
                </Link>
              </li>
              <li>
                <Link
                  to="/#faq"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Переход к вопросам и ответам"
                >
                  Вопросы и ответы
                </Link>
              </li>
              <li>
                <Link
                  to="/#reviews"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Переход к отзывам"
                >
                  Отзывы
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <a href="tel:+79789410960">
          <button
            className={styles.contact}
            aria-label="Набрать номер телефона"
          >
            <img src={phoneLightIcon} alt="Позвонить" /> 8 978 941 09 60
          </button>
        </a>

        <div
          className={`${styles.burger} ${menuOpen ? styles.active : ''}`}
          data-burger
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((prev) => !prev);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {menuOpen && <div className={styles.overlay}></div>}

      <div
        ref={menuRef}
        className={`${styles.sideMenu} ${menuOpen ? styles.open : ''}`}
      >
        <nav className={styles.menu}>
          <ul>
            <li style={{ animationDelay: '0.1s' }}>
              <Link
                to="/#main"
                onClick={() => setMenuOpen(false)}
                aria-label="Переход на главную страницу"
              >
                Главная
              </Link>
            </li>

            <li style={{ animationDelay: '0.3s' }}>
              <Link
                to="/#products"
                onClick={() => setMenuOpen(false)}
                aria-label="Переход к вариантам аренды"
              >
                Выбор кровати
              </Link>
            </li>
            <li style={{ animationDelay: '0.3s' }}>
              <Link
                to="/#faq"
                onClick={() => setMenuOpen(false)}
                aria-label="Переход к вопросам и ответам"
              >
                Вопросы и ответы
              </Link>
            </li>
            <li style={{ animationDelay: '0.3s' }}>
              <Link
                to="/#reviews"
                onClick={() => setMenuOpen(false)}
                aria-label="Переход к отзывам"
              >
                Отзывы
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
