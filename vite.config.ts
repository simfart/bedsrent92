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
            <link rel="preload" href="/assets/static/index.css" as="style">
            <link rel="preload" href="/assets/static/Montserrat-Bold.woff2" as="font" type="font/woff2" crossorigin="anonymous">
            <link rel="preload" href="/assets/static/Montserrat-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">
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
      styles: path.resolve(__dirname, './src/app/styles'),
    },
  },
});
