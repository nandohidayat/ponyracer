import { createApp } from 'vue';
import App from './App.vue';
import Alert from '@/components/Alert.vue';
import router from './router.ts';
import '@/assets/main.css';

createApp(App)
.component('Alert', Alert)
.use(router)
.mount('#app');
