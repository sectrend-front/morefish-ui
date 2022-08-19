import { App } from 'vue'
import Card from './Card.vue'
import { Name } from './const'

Card.name = Name

Card.install = (app: App) => {
  app.component(Card.name, Card)
}

export default Card
