import { Name } from '../const'
import { TagProps, validatorSize, validatorType } from './getProps'

export function setClass(props: TagProps) {
  let classStr = Name
  if (props.type && validatorType(props.type)) classStr += ` ${Name}-type__${props.type}`
  if (props.ghost === true) classStr += ` ${Name}-ghost`
  if (props.size && validatorSize(props.size)) classStr += ` ${Name}-size__${props.size}`
  if (props.round === true) classStr += ` ${Name}-round`
  return classStr
}
