import { ExtractPropTypes } from 'vue'

const TitlePlaceArr = ['left', 'right', 'center']
export const validatorTitlePlace = (val: string) => TitlePlaceArr.includes(val)
export function getProps() {
  return {
    dashed: Boolean,
    vertical: Boolean,
    titlePlace: {
      default: 'center',
      validator: (val: string) => validatorTitlePlace(val)
    }
  }
}

export type DividerProps = Partial<ExtractPropTypes<ReturnType<typeof getProps>>>
