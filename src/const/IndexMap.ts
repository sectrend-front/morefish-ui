export type MapValue = {
  text: string
  url: string
}

const IndexMap = new Map<string, MapValue>([
  ['按钮button', { text: '按钮 Button', url: '/button' }],
  ['表格table', { text: '表格 Table', url: '/table' }],
  ['输入框input', { text: '输入框 Input', url: '/input' }],
  ['选项卡tabs', { text: '选项卡 Tabs', url: '/table' }]
])

const searchIndexMap = (keyword: string) => {
  const iterator = IndexMap.keys()
  const result: unknown[] = []
  let item = iterator.next()
  do {
    if (item.value.toLocaleLowerCase().search(keyword.toLocaleLowerCase()) !== -1 && item.value) result.push(IndexMap.get(item.value))
    item = iterator.next()
  } while (!item.done)
  return result
}

export { IndexMap, searchIndexMap }
