import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: 'https://jalbr74.github.io/power-pages-webapp/', // Set the base path to your subfolder
})
