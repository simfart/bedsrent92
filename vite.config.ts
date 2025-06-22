import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import ssr from 'vike/plugin';
import { createHtmlPlugin } from 'vite-plugin-html';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [
    react(),
    ssr({
      prerender: true,
      includeAssetsImportedByServer: true,
    }),
    createHtmlPlugin({
      minify: isProduction,
      inject: {
        data: {
          preloadTags: `
            <link rel="preload" href="/fonts/Montserrat-Bold.woff2" as="font" type="font/woff2" crossorigin="anonymous">
            <link rel="preload" href="/fonts/Montserrat-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">
          `,
          globalStyles: `
            <style>
              @font-face {
                font-family: 'Montserrat';
                src: url('/fonts/Montserrat-Bold.woff2') format('woff2');
                font-weight: bold;
                font-style: normal;
                font-display: swap;
              }

              @font-face {
                font-family: 'Montserrat';
                src: url('/fonts/Montserrat-Regular.woff2') format('woff2');
                font-weight: normal;
                font-style: normal;
                font-display: swap;
              }

              :root {
                font-family: 'Montserrat', system-ui, Avenir, Helvetica, Arial, sans-serif;
                line-height: 1.5;
                font-weight: 400;
                font-synthesis: none;
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                max-width: 1440px;
                margin: 0 auto;
              }

              body {
                font-family: 'Montserrat', Arial, sans-serif;
                font-style: normal;
                font-size: 14px;
                color: #252b42;
                margin: 0;
                background-color: #ffffff;
              }

              #root {
                max-width: 1440px;
                margin: 0 auto;
                text-align: center;
                width: 100%;
              }

              h1, h2, h3, p {
                margin: 0;
              }

              * {
                box-sizing: border-box;
              }

              @media (max-width: 576px) {
                body {
                  font-size: 14px;
                }

                h1 {
                  font-size: 1.8rem;
                }

                h2 {
                  font-size: 1.5rem;
                }

                h3 {
                  font-size: 1.3rem;
                }
              }

              @media (max-width: 880px) {
                body {
                  font-size: 16px;
                }

                h1 {
                  font-size: 2.2rem;
                }

                h2 {
                  font-size: 1.8rem;
                }

                h3 {
                  font-size: 1.5rem;
                }
              }
            </style>
          `,
        },
      },
    }),
    ViteImageOptimizer({
      exclude: ['**/*.svg', '**/*.webp'],
      png: {
        quality: 70,
      },
      jpeg: {
        quality: 70,
      },
      jpg: {
        quality: 70,
      },
      webp: {
        lossless: true,
        quality: 100,
        nearLossless: false,
        smartSubsample: false,
      },
    }),
  ],
  publicDir: 'public',
  assetsInclude: ['**/*.woff', '**/*.woff2'],
  css: {
    modules: {
      // 👇 гарантирует стабильные имена в прод и dev
      generateScopedName: isProduction
        ? '[hash:base64:8]' // для продакшена — короткие хэши
        : '[name]__[local]__[hash:base64:5]', // для dev — читаемые имена
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "styles/variables" as *;
          @use "styles/mixins" as *;
        `,
      },
    },
  },
  base: '/',
  resolve: {
    alias: {
      app: path.resolve(__dirname, './src/app'),
      shared: path.resolve(__dirname, './src/shared'),
      features: path.resolve(__dirname, './src/features'),
      entities: path.resolve(__dirname, './src/entities'),
      widgets: path.resolve(__dirname, './src/widgets'),
      pages: path.resolve(__dirname, './src/pages'),
      styles: path.resolve(__dirname, './src/app/styles'),
    },
  },
});
