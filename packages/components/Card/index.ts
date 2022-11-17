import Card from './Card.vue'
import { Name } from './const'
import { withInstall } from '../../utils/withInstall'

Card.name = Name

const MfCard = withInstall(Card)

export default MfCard
