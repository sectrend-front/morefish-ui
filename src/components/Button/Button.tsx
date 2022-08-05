import { defineComponent } from 'vue'
import './Button.less'

const ButtonType = ['primary', 'success', 'info', 'warning', 'danger']

export default defineComponent({
  props: {
    type: String
  },
  setup(props, { slots }) {
    console.log(props.type)
    console.log(233)

    return () =>
      <>
        <button class={`mf-button ${props.type && ButtonType.includes(props.type) ? 'mf-button-type-' + props.type : ''}`}
        >{slots.default && slots.default()}</button>
      </>
  }
})
