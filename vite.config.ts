import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        tailwindcss()
    ],
    resolve: {
      alias: {
        '@/Table': resolve(__dirname, './resources/js/components/TableComponents')
      },
    }
})
