import { Name } from '../const'
import { AlertProps } from './getProps'

export function setClass(props: AlertProps) {
  let classStr = ''
  classStr += ` ${Name}-type-${props.type}`
  return classStr
}
