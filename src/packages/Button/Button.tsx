import { defineComponent } from 'vue'
import { Types, Name, Sizes } from './const'
import './Button.less'

export default defineComponent({
  props: {
    type: String,
    round: Boolean,
    plain: Boolean,
    dashed: Boolean,
    strong: Boolean,
    ghost: Boolean,
    size: {
      default: 'default',
      type: String
    }
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const setStyle = () => {
      let styleStr = ''
      styleStr += `${Name}`
      styleStr += props.type && Types.includes(props.type) ? ` ${Name}-type-${props.type}` : ''
      styleStr += Sizes.includes(props.size) ? ` ${Name}-size-${props.size}` : ''
      styleStr += props.dashed ? ` ${Name}-dashed` : ''
      styleStr += props.strong ? ` ${Name}-strong` : ''
      styleStr += props.ghost ? ` ${Name}-ghost` : ''
      return styleStr
    }

    return () => (
      <>
        <button class={setStyle()} onClick={(evt: MouseEvent) => emit('click', evt)}>
          <span class={`${Name}-span`}>{slots.default && slots.default()}</span>
        </button>
      </>
    )
  }
})
