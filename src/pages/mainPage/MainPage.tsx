import { MainContent } from 'features/mainContent/MainContent';
import { FC } from 'react';
import { Footer } from 'widgets/footer/Footer';
import { Header } from 'widgets/header/Header';
import 'app/styles/global.scss';

export const MainPage: FC = () => {
  return (
    <>
      <Header /> <MainContent /> <Footer />
    </>
  );
};
