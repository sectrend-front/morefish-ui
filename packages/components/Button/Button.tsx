import { defineComponent } from 'vue'
import { Name } from './const'
import './style/index.less'
import { Loading } from '../../icon'
import { getProps } from './src/getProps'
import { setClass } from './src/setClass'

export default defineComponent({
  props: getProps(),
  emits: ['click'],
  name: Name,
  setup(props, { slots, emit }) {
    return () => (
      <>
        <button
          class={setClass(props)}
          onClick={(evt: MouseEvent) => emit('click', evt)}
          disabled={props.disabled || props.loading}
        >
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
