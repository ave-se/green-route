// main.js
import { createApp } from 'vue';
import { LMap, LTileLayer, LMarker } from 'vue-leaflet';
import 'leaflet/dist/leaflet.css';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
app.component('LMap', LMap);
app.component('LTileLayer', LTileLayer);
app.component('LMarker', LMarker);
app.use(store).use(router).mount('#app');