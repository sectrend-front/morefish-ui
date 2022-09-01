import Tag from './Tag.vue'
import { withInstall } from '#/utils/withInstall'
import { Name } from './const'

Tag.name = Name
export const MfTag = withInstall(Tag)
export default MfTag
