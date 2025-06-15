import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.scss'; // ваш SCSS-модуль

export const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);

  const [status, setStatus] = useState<string | null>(null);
  const [consent, setConsent] = useState<boolean>(false); // <-- здесь объявляем consent
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    emailjs.init('vh3BcaTr0pMZI7IpD');
    nameRef.current?.focus();
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!consent) {
      setStatus(
        '❗ Пожалуйста, дайте согласие на обработку персональных данных.',
      );
      return;
    }
    if (!formRef.current) return;

    setLoading(true);
    emailjs
      .sendForm(
        'yandex_smtp',
        'template_ts4skw6',
        formRef.current,
        'vh3BcaTr0pMZI7IpD',
      )
      .then(() => {
        setStatus('✅ Сообщение отправлено!');
        formRef.current?.reset();
        setConsent(false);
      })
      .catch((error) => {
        console.error('Ошибка отправки:', error);
        setStatus('❌ Ошибка отправки. Проверьте консоль.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className={styles.form}>
      <input
        ref={nameRef}
        type="text"
        name="name"
        placeholder="Ваше имя"
        required
      />
      <input type="email" name="email" placeholder="Ваш email" required />
      <textarea name="message" placeholder="Сообщение" required />

      <label className={styles.consent}>
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        Я даю согласие на обработку персональных данных. Подробнее в{' '}
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
          Политике конфиденциальности
        </a>
        .
      </label>

      <button type="submit" disabled={loading}>
        {loading ? 'Отправка...' : 'Отправить'}
      </button>

      {status && (
        <p className={status.startsWith('✅') ? styles.success : styles.error}>
          {status}
        </p>
      )}
    </form>
  );
};
