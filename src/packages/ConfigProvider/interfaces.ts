import { LOCALE_TYPE, SIZE_TYPE } from './const'

export interface IConfigProviderButtonProps {
  autoInsertSpace: boolean
}

export interface IConfigProviderMessageProps {
  max: number
}

type localeType = keyof LOCALE_TYPE
type sizeType = keyof SIZE_TYPE

export interface IConfidProviderProps {
  locale: localeType // 'zh' | 'en'
  size: sizeType // 'large' | 'default' | 'small'
  button: IConfigProviderButtonProps
  message: IConfigProviderMessageProps
}
