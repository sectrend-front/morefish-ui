import { App } from 'vue'
import './style/theme.less'
import './utils/theme'
import * as components from './components'
export * from './components'

export const install = (app: App) => {
  for (const itemKey in components) {
    app.use(components[itemKey])
  }
}

export default install
