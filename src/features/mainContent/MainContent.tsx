import { FC } from 'react';
import styles from './MainContent.module.scss';
import ProductList from 'features/productList/ProductList';
import Faq from 'features/faq/Faq';
import { Description } from 'features/description/Description';
import { ContactForm } from 'shared/сontactForm/ContactForm';

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
      </section>
      <Description />
      <ProductList />
      <Faq />
      <ContactForm />
    </main>
  );
};
