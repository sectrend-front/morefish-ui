import { MapValue, searchIndexMap } from '@/const/IndexMap'
import { expect, test } from 'vitest'

const testB: MapValue[] = [
  { text: '按钮 Button', url: '/button' },
  { text: '表格 Table', url: '/table' },
  { text: '选项卡 Tabs', url: '/table' }
]

const testBu: MapValue[] = [{ text: '按钮 Button', url: '/button' }]

test('IndexTable func ---test', () => {
  expect(searchIndexMap('b')).toStrictEqual(testB)
  expect(searchIndexMap('bu')).toStrictEqual(testBu)
})
