import React from 'react';
import styles from './PrivacyPolicy.module.scss';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Политика конфиденциальности</h1>

      <section className={styles.section}>
        <h2 className={styles.heading}>1. Общие положения</h2>
        <p>
          Настоящая Политика конфиденциальности определяет порядок обработки и
          защиты персональных данных пользователей сайта и является неотъемлемой
          частью пользовательского соглашения.
        </p>
        <p>
          Используя сайт, вы соглашаетесь с данной Политикой и условиями
          обработки своих персональных данных.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>2. Термины и определения</h2>
        <ul className={styles.list}>
          <li>
            <strong>Персональные данные</strong> — любая информация, относящаяся
            к прямо или косвенно определенному или определяемому физическому
            лицу.
          </li>
          <li>
            <strong>Обработка</strong> — любое действие (операция) с
            персональными данными, включая сбор, хранение, использование.
          </li>
          <li>
            <strong>Пользователь</strong> — физическое лицо, предоставившее свои
            персональные данные.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>3. Цели сбора данных</h2>
        <ul className={styles.list}>
          <li>Обратная связь и консультация по услугам сайта.</li>
          <li>Предоставление релевантной информации и новостей.</li>
          <li>Улучшение качества пользовательского опыта.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>4. Перечень передаваемых данных</h2>
        <p>
          При оформлении заявки через форму обратной связи мы можем запрашивать:
        </p>
        <ul className={styles.list}>
          <li>Ваше имя</li>
          <li>Электронную почту</li>
          <li>Текст сообщения</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>5. Правовые основания обработки</h2>
        <p>
          Обработка персональных данных осуществляется на основании ст. 6 ФЗ-152
          «О персональных данных»:
        </p>
        <ul className={styles.list}>
          <li>
            <em>Согласие субъекта</em> (ст. 6 п.1 п.а) — вы даете согласие при
            отправке формы.
          </li>
          <li>
            <em>Правомерный интерес</em> — улучшение работы сайта, коммуникация
            с пользователем.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>6. Условия и сроки хранения</h2>
        <p>
          Персональные данные хранятся не дольше, чем это необходимо для целей
          их обработки, но не более 1 года.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>7. Права пользователя</h2>
        <ul className={styles.list}>
          <li>Запросить доступ к своим данным.</li>
          <li>Потребовать внесения изменений или удаления.</li>
          <li>Отозвать согласие на обработку в любой момент.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>8. Контактная информация</h2>
        <p>
          Если у вас есть вопросы по Политике конфиденциальности, вы можете
          связаться с нами по e-mail:{' '}
          <a href="mailto:arendamed82@yandex.ru">contact@arendamed92.ru</a>.
        </p>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} МедЮг Аренда. Все права защищены.</p>
      </footer>
    </div>
  );
};
