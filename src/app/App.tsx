import { FC } from 'react';
import { Footer } from 'widgets/footer/Footer';
import { Header } from 'widgets/header/Header';
import { AppRoutes } from './Routes';
import './styles/global.scss';

export const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};
