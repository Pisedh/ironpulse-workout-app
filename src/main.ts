import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import './style.css';
const routes=[{path:'/',component:()=>import('./views/Home.vue')},{path:'/train',component:()=>import('./views/Train.vue')},{path:'/nutrition',component:()=>import('./views/Nutrition.vue')},{path:'/progress',component:()=>import('./views/Progress.vue')},{path:'/coach',component:()=>import('./views/Coach.vue')},{path:'/settings',component:()=>import('./views/Settings.vue')},{path:'/:pathMatch(.*)*',redirect:'/'}];
const app=createApp(App);app.use(createPinia());app.use(createRouter({history:createWebHashHistory(),routes}));app.mount('#app');
