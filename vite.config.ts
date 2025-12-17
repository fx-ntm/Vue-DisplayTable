import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
        dts({
            tsconfigPath: './tsconfig.app.json',
            outDir: 'dist',
            include: ['src/**/*.ts', 'src/**/*.vue'],
            exclude: ['src/demo/**', 'src/main.ts', 'src/App.vue'],
            rollupTypes: true,
        })
    ],
    resolve: {
        alias: {
            '@/Table': resolve(__dirname, './src/components/Table/components/')
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'VueDisplayTable',
            fileName: (format) => `vue-displaytable.${format}.js`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue'
                },
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') return 'vue-displaytable.css'
                    return assetInfo.name || 'asset'
                }
            }
        },
        sourcemap: true,
        emptyOutDir: true
    }
})
