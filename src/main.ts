import { createApp } from 'vue'
import './styles/style.less'

import App from './App.vue'
import router from '@/router'

import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import ShowBox from '@/components/ShowBox/ShowBox.vue'

// import { Button, Icon, Tabs, Card } from '../packages'
import MorefishUi from '../packages'
import '#/style/theme.less'

// import MorefishUi from '../dist/morefish.es.js'
// import '../dist/static/index.d515b6e5.css'

// import MorefishUi from 'morefish-ui'
// import 'morefish-ui/dist/static/index.d515b6e5.css'

const app = createApp(App)
app.use(hljsVuePlugin)
app.use(router)
app.use(MorefishUi)
// app.use(Button)
// app.use(Icon)
// app.use(Tabs)
// app.use(Card)
app.component('show-box', ShowBox)
app.mount('#app')
