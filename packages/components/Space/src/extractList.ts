import { isFragment } from '../../../utils/vnode'
import { VNode } from 'vue'

/** 清洗slot数据 */
export const extractList = (list: VNode[]) => {
  let arr: VNode[] = []
  list.forEach((item) => {
    isFragment(item) && Array.isArray(item.children)
      ? (arr = [...arr, ...extractList(item.children as VNode[])])
      : arr.push(item)
  })
  return arr
}
