import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const list = ref('233')
    return () => <button class="button">{{ list }}</button>
  }
})
