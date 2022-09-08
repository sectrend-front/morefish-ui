import { ExtractPropTypes } from 'vue'
import { Types, Sizes } from '../const'

export const validatorType = (val: string | undefined) => Types.includes(val)
export const validatorSize = (val: string | undefined) => Sizes.includes(val)

export function getProps() {
  return {
    type: {
      default: undefined,
      validator: (val: string) => validatorType(val)
    },
    plain: Boolean,
    dashed: Boolean,
    strong: Boolean,
    ghost: Boolean,
    round: Boolean,
    circle: Boolean,
    size: {
      default: undefined,
      validator: (val: string) => validatorSize(val)
    },
    disabled: Boolean,
    loading: Boolean,
    color: String
  }
}

export type ButtonProps = Partial<ExtractPropTypes<ReturnType<typeof getProps>>>
