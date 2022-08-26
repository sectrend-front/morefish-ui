import {
  defineComponent,
  watch,
  ref,
  renderSlot,
  type RendererElement,
  type RendererNode,
  VNode,
  getCurrentInstance,
  onMounted
} from 'vue'
import { Name, PaneName, PaneProps } from './const'

export default defineComponent({
  name: Name,
  props: {
    activeKey: {
      require: true,
      type: [String, Number]
    }
  },
  setup(props, { slots }) {
    const paneSlotList: VNode<RendererNode, RendererElement>[] = []
    console.log('zzz')

    const navList = ref<PaneProps[]>([])

    const getPaneInfo = () => {
      if (!slots.default) return null
      console.log(slots.default())

      // paneSlotList = slots.default().filter((item) => (item.type as any).name && (item.type as any).name === PaneName)
      // navList.value = paneSlotList.map((item) => item.props)
      // console.log(navList.value)
    }

    getPaneInfo()

    watch(
      () => props.activeKey,
      (value) => {
        console.log(value)
      }
    )

    onMounted(() => {
      const instance = getCurrentInstance()
      console.log(instance)
    })

    return () => (
      <div class={`${Name}`}>
        <div class={`${Name}-nav`}>
          {navList.value.map(({ name, tab }) => (
            <div key={name}>{tab}</div>
          ))}
        </div>
        <div class={`${Name}-content`}> {renderSlot(slots, 'default')} </div>
      </div>
    )
  }
})
