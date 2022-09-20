import Alert from './Alert'
import { Name } from './const'
import { withInstall } from '#/utils/withInstall'

Alert.name = Name

const MfAlert = withInstall(Alert)

export default MfAlert
