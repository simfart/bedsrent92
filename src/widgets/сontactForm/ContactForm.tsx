import { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    // Инициализация EmailJS (обязательно, если используешь старую версию)
    emailjs.init('vh3BcaTr0pMZI7IpD');
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Попытка отправки формы...');
    if (!formRef.current) return;

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
      })
      .catch((error) => {
        console.error('Ошибка отправки:', error);
        setStatus('❌ Ошибка отправки. Проверь консоль.');
      });
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Ваше имя" required />
      <input type="email" name="email" placeholder="Ваш email" required />
      <textarea name="message" placeholder="Сообщение" required />
      <button type="submit">Отправить</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default ContactForm;
