import Icon from './Icon.vue'
import { Name } from './const'
import { withInstall } from '#/utils/withInstall'

Icon.name = Name

const MfIcon = withInstall(Icon)

export default MfIcon
