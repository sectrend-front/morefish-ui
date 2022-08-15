import { App } from 'vue'
import MfButton from './Button'
import MFConfigProvider from './ConfigProvider'

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
