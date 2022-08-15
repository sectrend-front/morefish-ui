// import type { IConfidProviderProps } from '@/packages/ConfigProvider/interfaces'
import type { InjectionKey, Ref } from 'vue'

// export type ConfigProviderContext = Partial<IConfidProviderProps>
export type ConfigProviderContext = any

export const configProviderContextKey: InjectionKey<Ref<ConfigProviderContext>> = Symbol()
