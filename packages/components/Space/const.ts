import { extractPropsArr } from '#/utils/extractPropsArr'

export const SpaceJustifyArr = extractPropsArr(['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly'])
export const SpacePAlignArr = extractPropsArr(['start', 'end', 'center', 'baseline', 'stretch'])
export type SpaceSize = number | [number] | [number, number]
export const Name = 'mf-space'
