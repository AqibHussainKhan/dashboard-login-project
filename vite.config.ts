import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves this project from /dashboard-login-project/.
// Keep the development server at / for easy local preview.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/dashboard-login-project/' : '/',
  plugins: [react(), tailwindcss()],
}))
