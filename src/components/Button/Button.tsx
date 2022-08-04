import { defineComponent } from 'vue'
import './Button.less'
import { TagPrefixName } from '@/const/config'

export default defineComponent({
  setup(props, { slots }) {
    console.log(props)
    return () => <button class={`${TagPrefixName}-button`}>{slots.default && slots.default()}</button>
  }
})
