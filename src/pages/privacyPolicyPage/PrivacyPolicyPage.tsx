import { FC } from 'react';
import { PrivacyPolicy } from 'shared/privacyPolicy/PrivacyPolicy';
import { Footer } from 'widgets/footer/Footer';
import { Header } from 'widgets/header/Header';
import 'app/styles/global.scss';

export const PrivacyPolicyPage: FC = () => {
  return (
    <>
      <Header /> <PrivacyPolicy /> <Footer />
    </>
  );
};
