import { defineComponent } from 'vue'
import { Types, Name, Sizes } from './const'
import './style/index.less'

export default defineComponent({
  props: {
    type: String,
    plain: Boolean,
    dashed: Boolean,
    strong: Boolean,
    ghost: Boolean,
    round: Boolean,
    circle: Boolean,
    size: {
      default: 'default',
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    },
    loading: {
      default: false,
      type: Boolean
    }
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const setClass = () => {
      let classStr = ''
      classStr += `${Name}`
      classStr += props.type && Types.includes(props.type) ? ` ${Name}-type-${props.type}` : ''
      classStr += Sizes.includes(props.size) ? ` ${Name}-size-${props.size}` : ''
      classStr += props.dashed ? ` ${Name}-dashed` : ''
      classStr += props.strong ? ` ${Name}-strong` : ''
      classStr += props.ghost ? ` ${Name}-ghost` : ''
      classStr += props.round ? ` ${Name}-round` : ''
      classStr += props.circle ? ` ${Name}-circle` : ''
      classStr += props.disabled ? ` ${Name}-disabled` : ''
      classStr += props.loading ? ` ${Name}-loading` : ''
      return classStr
    }

    return () => (
      <>
        <button class={setClass()} onClick={(evt: MouseEvent) => emit('click', evt)} disabled={props.disabled}>
          <span class={`${Name}-span`}>{slots.default && slots.default()}</span>
        </button>
      </>
    )
  }
})
