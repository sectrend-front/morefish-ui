import { App } from 'vue'
import { TagPrefixName } from '@/const/config'
import Button from './Button'

Button.name = `${TagPrefixName}-button`

Button.install = (app: App) => {
  app.component(Button.name, Button)
}

export default Button
