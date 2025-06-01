import { FC } from 'react';
import { Footer } from 'widgets/footer/Footer';
import { Header } from 'widgets/header/Header';
import { MainContent } from 'features/mainContent/MainContent';
import './styles/global.scss';

export const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};
