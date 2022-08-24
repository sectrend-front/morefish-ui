/** 注册组件 */
import type { App, Plugin } from 'vue'
type SFCWithInstall<T> = T & Plugin

export const withInstall = <T, E extends Record<string, any>>(main: T, extra?: E) => {
  ;(main as SFCWithInstall<T>).install = (app: App): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp)
    }
  }

  /**
   * 父组件上加上子组件属性
   * tabs -> tab-pane
   */
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      console.log(key)
      ;(main as any)[key] = comp
    }
  }

  return main as SFCWithInstall<T> & E
}
