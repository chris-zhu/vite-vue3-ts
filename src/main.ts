import { createApp } from 'vue'
import App from './App.vue'
import route from '/@/route'
import store from '/@/store'
import ElementPlus from 'element-plus'

import 'element-plus/lib/theme-chalk/index.css'
import '/@/styles/index.scss'

const app = createApp(App)
app.use(ElementPlus)
app.use(route).use(store).mount('#app')