import { ExtractPropTypes } from 'vue'
import { SpaceJustifyArr, SpacePAlignArr, type SpaceSize } from '../const'

export function getProps() {
  return {
    vertical: Boolean,
    justify: {
      default: 'start',
      validator: (val: string) => SpaceJustifyArr.includes(val)
    },
    align: {
      deafult: undefined,
      validator: (val: string) => SpacePAlignArr.includes(val)
    },
    wrap: {
      default: true,
      type: Boolean
    },
    size: {
      default: 8,
      validator: (val: SpaceSize) =>
        typeof val === 'number' ||
        (Array.isArray(val) && val.length >= 1 && val.length <= 2 && val.every((item) => typeof item === 'number'))
    }
  }
}

export type SpaceProps = Partial<ExtractPropTypes<ReturnType<typeof getProps>>>
