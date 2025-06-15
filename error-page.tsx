interface ErrorPageProps {
  error: Error;
}

export default function ErrorPage({ error }: ErrorPageProps) {
  console.error(error);
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Что‑то пошло не так</h1>
      <p>Мы уже работаем над этим.</p>
      <pre style={{ whiteSpace: 'pre-wrap', color: 'red' }}>
        {error.message}
      </pre>
    </div>
  );
}
