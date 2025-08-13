import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Ajuste o base para o nome do repositório do GitHub Pages
  // Se mudar o nome do repo, atualize aqui também.
  base: '/Petzao/',
  plugins: [react()],
})
