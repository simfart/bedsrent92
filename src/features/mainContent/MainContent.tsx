import { FC } from 'react';
// import { AboutUs } from 'features/aboutUs/AboutUs';
import styles from './MainContent.module.scss';
import ProductList from 'features/productList/ProductList';
import Faq from 'features/faq/Faq';

export const MainContent: FC = () => {
  return (
    <main
      className={styles.mainContent}
      itemScope
      itemType="http://schema.org/MedicalDevice"
    >
      <section id="main" className={styles.mainContentIntro}>
        <span>Аренда и доставка по Севастополю</span>
        <h1>Медицинские кровати на дом</h1>
        <span className={styles.listTitle}>Мы предлагаем:</span>
        <ul className={styles.listAnimated}>
          <li>Чистые, продезинфицированные и полностью исправные кровати</li>
          <li>Срочную доставку по Севастополю</li>
          <li>Оплату при получении — без риска и предоплаты</li>
        </ul>
        <div className={styles.mainDescr}>
          <p>
            Уже более 20 лет мы предоставляем в аренду медицинские
            функциональные кровати и средства реабилитации с быстрой доставкой
            по Севастополю. Профессиональные и надёжные решения для домашнего
            ухода и комфортного восстановления.
          </p>
        </div>
      </section>

      {/* <AboutUs /> */}

      <ProductList />
      <Faq />
    </main>
  );
};
