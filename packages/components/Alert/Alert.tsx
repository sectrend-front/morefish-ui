import { computed, defineComponent, ref } from 'vue'
import { Name } from './const'
import './style/index.less'
import { getProps } from './src/getProps'
import { setClass } from './src/setClass'
import { AlertTypes } from './const'
import { Notice, Close } from '#/icon'

export default defineComponent({
  name: Name,
  props: getProps(),
  setup(props, { slots }) {
    const visible = ref(true)
    const handleCloseClick = (): void => {
      if (visible.value === false) return
      visible.value = false
    }
    const cClass = computed(() => {
      if (!visible.value) {
        return [AlertTypes.includes(props.type) ? `mf-alert-${props.type} ` : 'mf-alert-info']
      }
      if (slots.description) {
        return [
          AlertTypes.includes(props.type)
            ? `mf-alert-${props.type} mf-alert-with-description`
            : 'mf-alert-info mf-alert-with-description'
        ]
      }
      return [AlertTypes.includes(props.type) ? `mf-alert-${props.type}` : 'mf-alert-info']
    })

    return () => (
      <>
        {visible.value && (
          <div class={cClass.value}>
            {slots.icon && props.showIcon && <div class="mf-alert-icon action">{slots.icon && <>{slots.icon()}</>}</div>}
            <>{!slots.icon && props.showIcon && <mf-icon icon={Notice} class="mf-alert-icon" />}</>
            <div class="mf-alert-content">
              {slots.default && <div class={`${Name}-message`}>{slots.default()}</div>}
              {slots.description && <div>{slots.description()}</div>}
            </div>
            {props.closable && <mf-icon icon={Close} class="mf-alert-close" onclick={handleCloseClick}></mf-icon>}
          </div>
        )}
      </>
    )
  }
})
