import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'

import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

// import MorefishUi from './packages'"

const app = createApp(App)
app.use(hljsVuePlugin)
app.use(router)
app.mount('#app')
