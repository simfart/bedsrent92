import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // ← вставь свой
        'YOUR_TEMPLATE_ID', // ← вставь свой
        formRef.current,
        'YOUR_PUBLIC_KEY', // ← вставь свой
      )
      .then(() => {
        setStatus('✅ Сообщение отправлено!');
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error(err);
        setStatus('❌ Ошибка при отправке.');
      });
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Ваше имя" required />
      <input type="email" name="email" placeholder="Ваш email" required />
      <textarea name="message" placeholder="Сообщение" required />
      <button type="submit">Отправить</button>
      <p>{status}</p>
    </form>
  );
};

export default ContactForm;
