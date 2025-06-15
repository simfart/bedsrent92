import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainContent } from 'features/mainContent/MainContent';
import { PrivacyPolicy } from 'shared/privacyPolicy/PrivacyPolicy';

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainContent />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
