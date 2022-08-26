import { VNodeProps } from 'vue'

const Name = 'mf-tabs'
const PaneName = 'mf-tab-pane'
type PaneProps = {
  name: string | number
  tab: string
} & VNodeProps

export { Name, PaneName, type PaneProps }
