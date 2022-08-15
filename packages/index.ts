import { App } from 'vue'
import './style/theme.less'
import MfButton from '#c/Button'
import MfIcon from '#c/Icon'
import MFConfigProvider from '#c/ConfigProvider'
import './utils/theme'

const components = {
  MfButton,
  MfIcon,
  MFConfigProvider
}

const install = (app: App) => {
  for (const itemKey in components) {
    const item = components[itemKey]
    app.component(item.name, item)
  }
}

export { MfButton, MfIcon, MFConfigProvider }
export default {
  install
}
