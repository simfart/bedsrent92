import { useState, useRef, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { MessageSquare } from 'lucide-react';
import styles from './FeedbackPopup.module.scss';

export const FeedbackPopup = () => {
  const [open, setOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleOutsideClick);
      return () =>
        document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [open]);

  return (
    <>
      <button
        className={styles.popupButton}
        onClick={() => setOpen(true)}
        aria-label="Обратная связь"
      >
        <MessageSquare size={20} />
      </button>

      {open && (
        <div className={styles.overlay}>
          <div ref={popupRef} className={styles.popupContent}>
            <button
              className={styles.closeButton}
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <h2>Связаться с нами</h2>
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
};
