import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({base:"/space-tourism-website",server:{base:"/space-tourism-website",},
  plugins: [react({fastRefresh:true,}),svgr()],
})
