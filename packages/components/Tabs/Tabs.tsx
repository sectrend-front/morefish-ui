import { type } from 'os'
import { defineComponent, watch, ref } from 'vue'
import { Name, PaneName } from './const'

export default defineComponent({
  name: Name,
  props: {
    activeKey: {
      require: true,
      type: [String, Number]
    }
  },
  setup(props, { slots }) {
    const paneSlotList: VNode[] = []
    const navList = ref([])
    const getPaneInfo = () => {
      if (!slots.default) return null
      console.log(slots.default())
      slots.default().forEach(
        (item) => {
          console.log(item)
        }
        // typeof item.type === 'object' && item.type.hasOwnProperty('name') && item.type.name === PaneName ? paneSlotList.push(item) : ''
      )
      // console.log(paneSlotList)
    }

    getPaneInfo()

    watch(
      () => props.activeKey,
      (value) => {
        console.log(value)
      }
    )

    return () => (
      <div class={`${Name}`}>
        <div class={`${Name}-nav`}> {props.activeKey} </div>
        <div class={`${Name}-content`}> {slots.default && slots.default()} </div>
      </div>
    )
  }
})
