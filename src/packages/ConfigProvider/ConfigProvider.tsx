import { defineComponent, provide, type PropType, ref } from 'vue'
import { configProviderContextKey } from '@/packages/tokens/config-provider'
import { SIZE } from './const'
import English from '../locale/lang/en'
import { IConfigProviderButtonProps, IConfigProviderMessageProps } from './interfaces'

export const configProviderProps = {
  locale: {
    type: Object,
    default: English
  },
  size: {
    type: String,
    default: SIZE[0],
    validator(value: string) {
      return SIZE.includes(value)
    }
  },
  button: {
    type: Object as PropType<IConfigProviderButtonProps>,
    default: () => ({
      autoInsertSpace: true // 自动在两个中文字符之间插入空格
    })
  },
  theme: {
    type: String,
    default: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  },
  message: {
    type: Object as PropType<IConfigProviderMessageProps>,
    default: () => ({
      max: 0 // 可同时显示的消息最大数量， 0 是不限制
    })
  }
}

export default defineComponent({
  props: configProviderProps,
  setup(props, { slots }) {
    const config = ref({
      locale: props.locale,
      size: props.size,
      button: props.button,
      message: props.message,
      theme: props.theme
    })
    provide(configProviderContextKey, config)

    return () => <>{slots.default && slots.default()}</>
  }
})
