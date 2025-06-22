import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

import styles from './ContactForm.module.scss'; // ваш SCSS-модуль
import { Link } from 'shared/ui/Link';

export const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);

  const [status, setStatus] = useState<string | null>(null);
  const [consent, setConsent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const RECAPTCHA_SITE_KEY = '6Lddz2krAAAAAD7xedwpJ75pa2ltnt8Wz-kQGb3z';
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);


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

    if (!captchaToken) {
      setStatus('❗ Подтвердите, что вы не робот.');
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
        setCaptchaToken(null);
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
      <input
        type="tel"
        name="phone"
        placeholder="+7 (999) 999-99-99"
        pattern="\+7\s?\(?[0-9]{3}\)?\s?[0-9]{3}-?[0-9]{2}-?[0-9]{2}"
        title="Формат: +7 (999) 999-99-99"
        required
      />

      <textarea name="message" placeholder="Сообщение" required />

      <label className={styles.consent}>
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        Я даю согласие на обработку персональных данных. Подробнее в{' '}
        <Link to="/privacy-policy" target="_blank">
          Политике конфиденциальности
        </Link>
        .
      </label>
      <ReCAPTCHA
        sitekey={RECAPTCHA_SITE_KEY}
        onChange={(token: string | null) => setCaptchaToken(token)}
        onExpired={() => setCaptchaToken(null)}
        className={styles.recaptcha}
      />
      <input
        type="hidden"
        name="g-recaptcha-response"
        value={captchaToken || ''}
      />
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
