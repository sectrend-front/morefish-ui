import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
// import MorefishUi from './packages'

const app = createApp(App)
// app.use(MorefishUi)
app.use(router)
app.mount('#app')
