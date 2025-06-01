import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PageContextClient } from './types.ts';

export async function render(pageContext: PageContextClient) {
  const { Page } = pageContext;
  ReactDOM.hydrateRoot(
    document.getElementById('app')!,
    <React.StrictMode>
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    </React.StrictMode>
  );
}
