import { Name } from '../const'
import { TagProps, validatorSize, validatorType } from './getProps'
export function setClass(props: TagProps) {
  let classStr = ''
  classStr += Name
  classStr += props.type && validatorType(props.type) ? ` ${Name}-type__${props.type}` : ''
  classStr += props.ghost === true ? ` ${Name}-ghost` : ''
  classStr += props.size && validatorSize(props.size) ? ` ${Name}-size__${props.size}` : ''
  classStr += props.round === true ? ` ${Name}-round` : ''
  return classStr
}
