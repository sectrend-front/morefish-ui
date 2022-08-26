import { VNode, Fragment, isVNode } from 'vue'

/**
 * isFragment: 判断一个节点是不是Fragment节点
 * Fragment节点: <xx v-for="item of list" ... > {{ item }} </xx>
 * node: 虚拟节点
 */
export function isFragment(node: VNode): boolean {
  return isVNode(node) && node.type === Fragment
}
