// Удалите BrowserRouter
import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageContextClient } from './types.ts';

export async function render(pageContext: PageContextClient) {
  const { Page } = pageContext;
  ReactDOM.hydrateRoot(
    document.getElementById('app')!,
    <React.StrictMode>
      <Page />
    </React.StrictMode>
  );
}
