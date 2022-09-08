let name = await question('component name: '),
  path = './packages/components',
  pathName = `${path}/${name}`

await fs.mkdir(pathName)
await fs.mkdir(`${pathName}/src`)

await fs.mkdir(`${pathName}/style`, (err) => {
  if (err) return console.error('mkdir error!')
  for (const key in fileList) {
    createFile(key)
  }
})

console.log('create success!')

const fileList = {
  'index.ts': ` import ${name} from './${name}'
                import { withInstall } from '#/utils/withInstall'
                                  
                ${name}.name = 'mf-${name.toLowerCase()}'
                export const Mf${name} = withInstall(${name})
                export default Mf${name}`,

  'const.ts': ` const Name = 'mf-${name.toLowerCase()}'
 
                export { Name }`,

  'style/index.less': `.mf-${name.toLowerCase()}{}`,

  'src/getProps.ts': `import { extractPropsArr } from '#/utils/extractPropsArr'
                      import { ExtractPropTypes } from 'vue'

                      export function getProps() {
                         return {}
                      }
                      export type ${name}Props = Partial<ExtractPropTypes<ReturnType<typeof getProps>>>`,

  'src/setClass.ts': ` import { Name } from '../const'
                       import { ${name}Props} from './getProps'
                      
                       export function setClass(props: ${name}Props) {
                          let classStr = ''
                          classStr += Name
                          return classStr
                        }`
}

const createFile = async (fileKey) => await fs.writeFile(`${pathName}/${fileKey}`, fileList[fileKey])
