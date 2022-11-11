import { ExtractPropTypes } from 'vue'

export const PlaceLeft = 'left'
export const PlaceRight = 'right'
const TitlePlaceArr = [PlaceLeft, PlaceRight, 'center']
export const validatorTitlePlace = (val: string) => TitlePlaceArr.includes(val)
export function getProps() {
  return {
    vertical: Boolean,
    titlePlace: {
      default: 'center',
      validator: (val: string) => validatorTitlePlace(val)
    },
    titleText: String
  }
}

export type DividerProps = Partial<ExtractPropTypes<ReturnType<typeof getProps>>>
