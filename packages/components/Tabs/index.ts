import Tabs from './Tabs'
import TabPane from './TabPane'
import { withInstall } from '../../utils/withInstall'

export const MfTabs = withInstall(Tabs, { TabPane })
TabPane.install = () => {}

export default MfTabs
export { TabPane }
