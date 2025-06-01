import { FC, useEffect, useRef, useState } from 'react';
import { logoImg, phoneLightIcon } from 'shared/assets/images';
import styles from './Header.module.scss';

export const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

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
          <div className={styles.logo}>
            <img src={logoImg} alt="Логотип" />
            <div className={styles['logo-title']}>МедЮг АРЕНДА</div>
          </div>

          <nav className={styles.desktopMenu}>
            <ul>
              <li>
                <button
                  onClick={() => handleClick('main')}
                  aria-label="Переход на главную страницу"
                >
                  Главная
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick('about-us')}
                  aria-label="Переход на страницу о нас"
                >
                  О нас
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick('products')}
                  aria-label="Переход к вариантам аренды"
                >
                  Выбор кровати
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick('faq')}
                  aria-label="Переход к вопросам и ответам"
                >
                  Вопросы и ответы
                </button>
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

        {/* Бургер-кнопка */}
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
              <button
                onClick={() => handleClick('main')}
                aria-label="Переход на главную страницу"
              >
                Главная
              </button>
            </li>
            <li style={{ animationDelay: '0.2s' }}>
              <button
                onClick={() => handleClick('about-us')}
                aria-label="Переход на страницу о нас"
              >
                О нас
              </button>
            </li>
            <li style={{ animationDelay: '0.3s' }}>
              <button
                onClick={() => handleClick('products')}
                aria-label="Переход к вариантам аренды"
              >
                Выбор кровати
              </button>
            </li>
            <li style={{ animationDelay: '0.3s' }}>
              <button
                onClick={() => handleClick('faq')}
                aria-label="Переход к вопросам и ответам"
              >
                Вопросы и ответы
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
