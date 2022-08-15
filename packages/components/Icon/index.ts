import { App } from 'vue'
import Icon from './Icon.vue'
import { Name } from './const'

Icon.name = Name

Icon.install = (app: App) => {
  app.component(Icon.name, Icon)
}

export default Icon
