import { SpinSizes } from '../const'

export const getDefaultRadius = (type: string): number => {
  let r = 0
  switch (type) {
    case SpinSizes[0]:
      r = 3
      break
    case SpinSizes[1]:
      r = 4
      break
    case SpinSizes[2]:
      r = 5
      break
  }
  return r
}
