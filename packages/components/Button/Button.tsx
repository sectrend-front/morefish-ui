import { defineComponent } from 'vue'
import { Types, Name, Sizes } from './const'
import './style/index.less'
import { Loading } from '../../icon'

export default defineComponent({
  props: {
    type: String,
    plain: Boolean,
    dashed: Boolean,
    strong: Boolean,
    ghost: Boolean,
    round: Boolean,
    circle: Boolean,
    size: String,
    disabled: {
      default: false,
      type: Boolean
    },
    loading: {
      default: false,
      type: Boolean
    },
    color: String
  },
  emits: ['click'],
  name: Name,
  setup(props, { slots, emit }) {
    const setClass = () => {
      let classStr = ''
      classStr += `${Name}`
      classStr += props.type && Types.includes(props.type) ? ` ${Name}-type-${props.type}` : ''
      classStr += props.size && Sizes.includes(props.size) ? ` ${Name}-size-${props.size}` : ''
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
        <button class={setClass()} onClick={(evt: MouseEvent) => emit('click', evt)} disabled={props.disabled || props.loading}>
          {props.loading && (
            <i class={`${Name}-loading-icon`}>
              <Loading />
            </i>
          )}
          {!props.loading && slots.icon && slots.icon()}
          {slots.default && <span class={`${Name}-span`}>{slots.default()}</span>}
          {!props.loading && slots['icon-after'] && slots['icon-after']()}
        </button>
      </>
    )
  }
})
