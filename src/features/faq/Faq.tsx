import { FC } from 'react';
import styles from './Faq.module.scss';
import { FaqItem } from './faqItem/FaqItem';
import { faqData } from 'entities/faqData/faqData';

const Faq: FC = () => {
  return (
    <section
      id="faq"
      className={styles.faq}
    >
      <h2 className={styles.subtitle}>
        Аренда медицинского оборудования в Севастополе — ответы на частые
        вопросы
      </h2>
      <span className={styles.title}>Вопросы и ответы</span>

      {faqData.map(({ question, answer }, i) => (
        <FaqItem key={i} question={question} answer={answer} />
      ))}
    </section>
  );
};

export default Faq;
