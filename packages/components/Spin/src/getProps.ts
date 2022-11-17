import { ExtractPropTypes } from 'vue'
import { SpinSizes } from '../const'

export function getProps() {
  return {
    rotate: {
      default: true,
      type: Boolean
    },
    size: {
      default: SpinSizes[1],
      type: String,
      validator: (val: string) => SpinSizes.includes(val)
    },
    show: Boolean
  }
}
export type SpinProps = Partial<ExtractPropTypes<ReturnType<typeof getProps>>>
