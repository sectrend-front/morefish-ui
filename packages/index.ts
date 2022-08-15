import { App } from 'vue'
import './style/theme.less'
import MfButton from '#c/Button'
import MFConfigProvider from '#c/ConfigProvider'
import './utils/theme'

const components = {
  MfButton,
  MFConfigProvider
}

const install = (app: App) => {
  for (const itemKey in components) {
    const item = components[itemKey]
    app.component(item.name, item)
  }
}

export { MfButton }
export { MFConfigProvider }
export default {
  install
}
