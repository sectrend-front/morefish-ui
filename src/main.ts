import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import router from '@/router'

import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import ShowBox from '@/components/ShowBox/ShowBox.vue'
// import MorefishUi from './packages'"

const app = createApp(App)
app.use(hljsVuePlugin)
app.use(router)
app.component('show-box', ShowBox)
app.mount('#app')
