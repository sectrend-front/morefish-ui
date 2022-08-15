# ConfigProvider

```html
<script setup lang="ts">
import zh from '../packages/locale/lang/zh'
</script>

<template>
  <div>
    <MFConfigProvider :locale="zh" theme="dark" size="large" >
      <section>
        <mf-button type="primary">Primary</mf-button>
      </section>
    </MFConfigProvider>
  </div>
</template>

```


| 参数      | 说明     | 类型                          | 可选值                 | 默认值     |
| ------- | ------ | --------------------------- | ------------------- | ------- |
| locale  | 翻译文本对象 | Language                    | -                   | English |
| size    | 全局组件大小 | string                      | large/default/small | defaul  |
| button  | 按钮相关配置 | IConfigProviderButtonProps  | -                   | 详见下表    |
| message | 消息相关配置 | IConfigProviderMessageProps | -                   | 详见下表    |
| theme   | 主题配置   | string                      | dark/light          | 系统主题    |

## Button属性

| 参数              | 说明              | 类型      | 可选值 | 默认值   |
| --------------- | --------------- | ------- | --- | ----- |
| autoInsertSpace | 自动在两个中文字符之间插入空格 | boolean | -   | false |

## Message属性

| 参数  | 说明          | 类型     | 可选值 | 默认值 |
| --- | ----------- | ------ | --- | --- |
| max | 可同时显示的消息最大数 | number | -   | 0   |

## Hooks

### useGlobalConfig

`useGlobalConfig` 用于获取全局配置，不传参数获取全部配置，传入单一参数可获取对应配置信息

```javascript
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
```

### useLocale

`useLocale` 用于获取国际化转化信息，返回`lang` ：当前语言名称；`locale`： 当前解析数据源；`t`：映射函数

```javascript
const { lang, locale, t } = useLocale()


// 例子：
// 解析数据源：locale
{
    lang: 'en',
    mf: {
      button: {
        submit: 'Submit',
        reset: 'Reset'
      }
  }
}

// 此时解构useLocale() 返回的 lang, locale, t 对应值为：
// lang => 'en'
// locale => 
    /* 
      * ref({
          lang: 'en',
          mf: {
            button: {
              submit: 'Submit',
              reset: 'Reset'
            }
        }
      })             
    */
// t 为映射函数: t('mf.button.reset') => 'Reset'
```
