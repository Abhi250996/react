import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'build', // If you want to create a 'build' folder
  },
  plugins: [react()],
  base: "/react",
})
