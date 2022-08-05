import { defineComponent } from 'vue'
import './Button.less'

export default defineComponent({
  props: {
    type: String
  },
  setup(props, { slots }) {
    console.log(props.type)
    console.log(233)
    return () =>
      <>
        <button class='mf-button'>{slots.default && slots.default()}</button>
      </>
  }
})
