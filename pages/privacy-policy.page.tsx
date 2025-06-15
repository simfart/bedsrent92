// pages/privacy-policy.page.tsx
import React from 'react';
import { Header } from 'widgets/header/Header';
import { PrivacyPolicy } from 'shared/privacyPolicy/PrivacyPolicy';
import { Footer } from 'widgets/footer/Footer';

function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}

// Vike ждёт именно «object with Page»
export default {
  Page: PrivacyPolicyPage,
};
