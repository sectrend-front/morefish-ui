import { defineComponent, StyleValue, type VNode } from 'vue'
// import { defineComponent, isVNode, createTextVNode, createVNode, renderSlot } from 'vue'
// import type { ExtractPropTypes, StyleValue, VNode, VNodeArrayChildren, VNodeChild } from 'vue'
import { Name } from './const'
import { extractList } from './src/extractList'
import { getProps, SpaceSize } from './src/getProps'
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
const setStyleGap = (size: SpaceSize): string =>
  typeof size === 'number' ? size + 'px' : size.reduce((pre: string, cur) => pre + cur + 'px ', '')

export default defineComponent({
  name: Name,
  props: getProps(),
  setup(props, { slots }) {
    const setStyle = () => {
      const styleObj: StyleValue = {}
      styleObj.gap = setStyleGap(props.size)
      if (props.justify) styleObj.justifyContent = props.justify
      if (props.vertical) styleObj.flexDirection = 'column'
      if (!props.wrap) styleObj.flexWrap = 'nowrap'
      if (props.align) styleObj.alignItems = props.align as string
      return styleObj
    }
    const renderSlots = () => {
      const list: VNode[] = (slots.default && extractList(slots.default())) || []
      return list.map((item, index) => (
        <div class={`${Name}-item`} key={index}>
          {item}
        </div>
      ))
    }
    return () => (
      <div class={`${Name}`} style={setStyle()}>
        {' '}
        {renderSlots()}{' '}
      </div>
    )
  }
})
