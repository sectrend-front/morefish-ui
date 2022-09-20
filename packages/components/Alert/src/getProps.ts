import { ExtractPropTypes, PropType } from 'vue'
import { Types } from '../const'

export function getProps() {
  return {
    type: {
      type: String as PropType<Types>,
      default: 'info'
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    }
  }
}

export type AlertProps = Partial<ExtractPropTypes<ReturnType<typeof getProps>>>
