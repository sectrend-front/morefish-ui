import { Name } from '../const'
import { ButtonProps, validatorSize, validatorType } from './getProps'

export function setClass(props: ButtonProps) {
  let classStr = Name
  if (validatorType(props.type)) classStr += ` ${Name}-type-${props.type}`
  if (validatorSize(props.size)) classStr += ` ${Name}-size-${props.size}`
  if (props.dashed) classStr += ` ${Name}-dashed`
  if (props.strong) classStr += ` ${Name}-strong`
  if (props.ghost) classStr += ` ${Name}-ghost`
  if (props.round) classStr += ` ${Name}-round`
  if (props.circle) classStr += ` ${Name}-circle`
  if (props.disabled) classStr += ` ${Name}-disabled`
  if (props.loading) classStr += ` ${Name}-loading`
  return classStr
}
