import { defineComponent } from 'vue'
import { Types, Name, Sizes } from './const'
import { useLocale, useGlobalConfig } from '../hooks'
import './Button.less'

export default defineComponent({
  props: {
    type: String,
    round: Boolean,
    plain: Boolean,
    dashed: Boolean,
    size: {
      default: 'default',
      type: String
    }
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const { t } = useLocale()
    const setStyle = () => {
      let styleStr = ''
      styleStr += `${Name}`
      styleStr += props.type && Types.includes(props.type) ? ` ${Name}-type-${props.type}` : ''
      styleStr += Sizes.includes(props.size) ? ` ${Name}-size-${props.size}` : ''
      styleStr += props.dashed ? ` ${Name}-dashed` : ''
      return styleStr
    }

    // 获取全局配置
    const globalConfig = useGlobalConfig()

    // 获取国际化配置
    const locale = useGlobalConfig('locale')

    // 获取全局组件大小
    const size = useGlobalConfig('size')

    // 获取按钮相关配置
    const button = useGlobalConfig('button')

    // 获取消息相关配置
    const message = useGlobalConfig('message')

    // 获取主题配置
    const theme = useGlobalConfig('theme')

    console.log('globalConfig', globalConfig)
    console.log('locale', locale)
    console.log('size', size)
    console.log('button', button)
    console.log('message', message)
    console.log('theme', theme)

    return () => (
      <>
        <button class={setStyle()} onClick={(evt: MouseEvent) => emit('click', evt)}>
          {t('mf.button.submit')}
          {/* <span class={`${Name}-span`}>{slots.default && slots.default()}</span> */}
        </button>
      </>
    )
  }
})
