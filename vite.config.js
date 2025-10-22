import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/css/app.css',
        'resources/css/components/buttons.css',
        'resources/css/modules/auth.css',
        'resources/css/modules/welcome.css',
        'resources/css/sweetalert2-custom.css',
        'resources/js/app.js',
        'resources/js/components/welcome.js',
        'resources/js/components/searchFilter.js',
        'resources/js/components/sweetalert2-utils.js',
        'resources/js/utils/action-handler.js'
      ],
      refresh: true,
      buildDirectory: 'vite', // ✅ Laravel 11 expects manifest here
    }),
  ],
  build: {
    manifest: true,
    outDir: 'public/vite', // ✅ Laravel 11 default path
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
  base: '/vite/', // ✅ Laravel 11 default asset base
});