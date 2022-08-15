export { default as en } from './lang/en'
export { default as zh } from './lang/zh'

export type TranslatePair = {
  [key: string]: string | string[] | TranslatePair
}

export type Language = {
  name: string
  el: TranslatePair
}
