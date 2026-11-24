import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves from /reaphtech-portfolio/; other hosts serve from /.
const base = process.env.GITHUB_PAGES === 'true' ? '/reaphtech-portfolio/' : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
