import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";
import legacy from '@vitejs/plugin-legacy';
import autoprefixer from 'autoprefixer';

import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/assets/icons")],
    }),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  server: {
    hmr: {
      host: "localhost"
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
      ],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/vendors/_bootstrap.scss";`
      },
    },
  },
});
