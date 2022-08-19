import { App } from 'vue'
import './style/theme.less'
import MfButton from '#c/Button'
import MfIcon from '#c/Icon'
import MfConfigProvider from '#c/ConfigProvider'
import MfCard from '#c/Card'
import './utils/theme'

const components = {
  MfButton,
  MfIcon,
  MfConfigProvider,
  MfCard
}

const install = (app: App) => {
  for (const itemKey in components) {
    const item = components[itemKey]
    app.component(item.name, item)
  }
}

export { MfButton, MfIcon, MfConfigProvider, MfCard }
export default {
  install
}
