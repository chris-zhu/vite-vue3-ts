import { createApp } from 'vue'
import App from './App.vue'
import route from '/@/route'
import store from '/@/store'
import Antd from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'
import '/@/styles/index.scss'

const app = createApp(App)
app.use(Antd)
app.use(route).use(store).mount('#app')