import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import { setupI18n } from './locales/setupI18n'
// import 'ant-design-vue/dist/antd.css';


async function bootstrap() {
    const app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(Antd)
    await setupI18n(app)
    app.mount('#app')

}
bootstrap();