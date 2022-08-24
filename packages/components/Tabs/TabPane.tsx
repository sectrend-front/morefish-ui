import { defineComponent } from 'vue'
import { PaneName } from './const'

export default defineComponent({
  name: PaneName,
  setup(props, { slots }) {
    return () => <div class={`${PaneName}`}>zzz</div>
  }
})
