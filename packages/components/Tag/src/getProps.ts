import { extractPropsArr } from '#/utils/extractPropsArr'
import { ExtractPropTypes } from 'vue'
export const TagTypeArr = extractPropsArr(['primary', 'success', 'info', 'warning', 'danger'])
export const TagSizeArr = extractPropsArr(['small', 'large'])

export const validatorType = (val: string) => TagTypeArr.includes(val)
export const validatorSize = (val: string) => TagSizeArr.includes(val)

export function getProps() {
  return {
    type: {
      default: undefined,
      validator: (val: string) => validatorType(val)
    },
    ghost: {
      default: false,
      type: Boolean
    },
    closable: {
      default: false,
      type: Boolean
    },
    size: {
      default: undefined,
      validator: (val: string) => validatorSize(val)
    },
    round: Boolean
  }
}

export type TagProps = Partial<ExtractPropTypes<ReturnType<typeof getProps>>>
