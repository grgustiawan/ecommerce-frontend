import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App);

app.config.globalProperties.$user = 'http://172.30.14.30:5110/api/v1'
app.config.globalProperties.$product = 'http://172.30.14.134:9111/apotik/web'

app.use(store).use(router).mount('#app');
