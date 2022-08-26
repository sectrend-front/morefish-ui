import { type PropType } from 'vue'

export type PJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
export type PAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch' | undefined
export type PSize = [number, number] | [number, number, number] | [number, number, number, number]

export function getProps() {
  return {
    vertical: Boolean,
    justify: {
      deafult: 'start',
      type: String as PropType<PJustify>
    },
    align: {
      deafult: undefined,
      type: String as PropType<PAlign>
    },
    wrap: {
      default: true,
      type: Boolean
    },
    'wrap-item': {
      default: true,
      type: Boolean
    }
    // size: {
    //   default: 8,
    //   type: [Number, Array as PropType<PSize>]
    // }
  }
}
