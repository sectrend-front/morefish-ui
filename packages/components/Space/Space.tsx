import { defineComponent, type VNode } from 'vue'
// import { defineComponent, isVNode, createTextVNode, createVNode, renderSlot } from 'vue'
// import type { ExtractPropTypes, StyleValue, VNode, VNodeArrayChildren, VNodeChild } from 'vue'
import { Name } from './const'
import { extractList } from './src/extractList'
import { getProps } from './src/getProps'
import { setStyle } from './src/setStyle'
import './style/index.less'

/**
 * 因为Vue3支持组件template下有多个子标签 所以需要加space-item包裹 不然所有子元素都会被加上间距属性
 * <template>
 *  <div>11</div>
 *  <div>22</div>
 * </template>
 *
 * Vue2是template下必须只有且只有一个子标签
 * <template>
 *  <son-tag>
 *    <div>11</div>
 *    <div>22</div>
 *  </son-tag>
 * </template>
 */

export default defineComponent({
  name: Name,
  props: getProps(),
  setup(props, { slots }) {
    const renderSlots = () => {
      const list: VNode[] = (slots.default && extractList(slots.default())) || []
      return list.map((item, index) => (
        <div class={`${Name}-item`} key={index}>
          {item}
        </div>
      ))
    }
    return () => (
      <div class={`${Name}`} style={setStyle(props)}>
        {renderSlots()}
      </div>
    )
  }
})
