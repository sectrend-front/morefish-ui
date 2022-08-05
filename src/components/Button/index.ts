import { App } from 'vue'
import Button from './Button'
import { Name } from './const'

Button.name = Name

Button.install = (app: App) => {
  app.component(Button.name, Button)
}

export default Button
