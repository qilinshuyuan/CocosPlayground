import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import { setupI18n } from './locales/setupI18n'
// import 'ant-design-vue/dist/antd.css';
import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";


async function bootstrap() {
    const app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(Antd)
    app.use(hljsVuePlugin)

    await setupI18n(app)
    app.mount('#app')

}
bootstrap();