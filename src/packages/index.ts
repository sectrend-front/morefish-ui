import { App } from 'vue'
import './style/theme.less'
import MfButton from './Button'

const components = {
  MfButton
}

const install = (app: App) => {
  for (const itemKey in components) {
    const item = components[itemKey]
    app.component(item.name, item)
  }
}

export { MfButton }
export default {
  install
}
