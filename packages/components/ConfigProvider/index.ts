import { App } from 'vue'
import ConfigProvider from './ConfigProvider'
import { NAME } from './const'

ConfigProvider.name = NAME

ConfigProvider.install = (app: App) => {
  app.component(ConfigProvider.name, ConfigProvider)
}

export default ConfigProvider
