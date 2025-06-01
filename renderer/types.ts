import type { PageContext as VitePageContext } from 'vite-plugin-ssr/types';

// Using Record<string, unknown> for a more precise type definition
export type PageProps = Record<string, unknown>;

export type PageContextCustom = {
  Page: (pageProps: PageProps) => React.ReactElement;
  pageProps?: PageProps;
};

export type PageContextServer = VitePageContext & PageContextCustom;
export type PageContextClient = VitePageContext & PageContextCustom;

export type Page = (pageProps: PageProps) => React.ReactElement;
