import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: '/react/', // Replace <repository-name> with the name of your GitHub repository
  build: {
      outDir: 'dist', // Default output directory for the build
  },
});
