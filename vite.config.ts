import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        },
    },
    plugins: [
        laravel({
            input: ['resources/js/app.ts'],
            ssr: 'resources/js/ssr.ts',
            refresh: true,
        }),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    server: {
        host: '0.0.0.0', // Membuka akses Vite ke jaringan lokal
        hmr: {
            host: '10.227.176.181' // Ganti dengan IP Tethering Laptop Anda
        },
    },
});
// 2️⃣ Load Wayfinder HANYA di production
// if (process.env.NODE_ENV === 'production') {
//     plugins.push(
//         wayfinder({
//             formVariants: true,
//         }),
//     );
// }
