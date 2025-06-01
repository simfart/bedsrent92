import React, { useState } from 'react';
import styles from './ContactForm.module.scss'; // Импортируем стили

export const ContactForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Состояние для управления видимостью формы
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const toggleForm = () => setIsOpen((prev) => !prev); // Переключение состояния открытия/закрытия

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Здесь будет вызов API для отправки формы, например, через emailJS
      // emailjs.sendForm(...);
      setStatus('Сообщение успешно отправлено!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.log(error);
      setStatus('Ошибка при отправке.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      <button className={styles.toggleButton} onClick={toggleForm}>
        {isOpen ? 'Закрыть форму' : 'Открыть форму'}
      </button>

      {/* Контейнер формы, который будет раскрывать или скрывать форму */}
      <div className={`${styles.contactForm} ${isOpen ? styles.open : ''}`}>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <h2>Обратная связь</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ваше имя"
            required
            className={styles.inputField}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ваш email"
            required
            className={styles.inputField}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Ваше сообщение"
            required
            className={styles.textareaField}
          />
          <button
            type="submit"
            disabled={loading}
            className={styles.submitButton}
          >
            {loading ? 'Отправка...' : 'Отправить'}
          </button>

          {status && (
            <div
              className={`${styles.statusMessage} ${
                status.includes('успешно') ? styles.success : styles.error
              }`}
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
