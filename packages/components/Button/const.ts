import { extractPropsArr } from '../../utils/extractPropsArr'

const Types = extractPropsArr(['primary', 'success', 'info', 'warning', 'danger'])
const Name = 'mf-button'
const Sizes = extractPropsArr(['large', 'small'])

export { Types, Name, Sizes }
