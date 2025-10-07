import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import vsharp from 'vite-plugin-vsharp';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), vsharp({
    width: 1000,
    height: 1000,
    preserveMetadata: {
      orientation: true,
    },
    ".jpg": {
      "quality": 80
    },
  }),],
  base: '/sozialwerk-breisgau-job-quiz'
});
