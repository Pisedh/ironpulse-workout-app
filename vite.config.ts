import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwind from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({plugins:[vue(),tailwind(),VitePWA({registerType:'prompt',injectRegister:null,includeAssets:['icon.svg','icon-192.png','icon-512.png'],manifest:{name:'IRONPULSE AI',short_name:'IRONPULSE',description:'Train smarter. Own your progress.',theme_color:'#c4f568',background_color:'#111410',display:'standalone',start_url:'./',scope:'./',icons:[{src:'icon-192.png',sizes:'192x192',type:'image/png'},{src:'icon-512.png',sizes:'512x512',type:'image/png',purpose:'any'}]},workbox:{maximumFileSizeToCacheInBytes:3*1024*1024,globPatterns:['**/*.{js,css,html,svg,png,woff2}'],globIgnores:['**/exercises-3d-v1.png'],navigateFallback:'index.html',cleanupOutdatedCaches:true}})],build:{chunkSizeWarningLimit:400}});
