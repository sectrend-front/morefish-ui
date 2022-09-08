import { StyleValue } from 'vue'
import { SpaceSize } from '../const'
import { SpaceProps } from './getProps'

const setStyleGap = (size: SpaceSize): string =>
  typeof size === 'number' ? size + 'px' : size.reduce((pre: string, cur) => pre + cur + 'px ', '')

export function setStyle(props: SpaceProps) {
  const styleObj: StyleValue = {}
  styleObj.gap = setStyleGap(props.size!)
  if (props.justify) styleObj.justifyContent = props.justify
  if (props.vertical) styleObj.flexDirection = 'column'
  if (!props.wrap) styleObj.flexWrap = 'nowrap'
  if (props.align) styleObj.alignItems = props.align as string
  return styleObj
}
