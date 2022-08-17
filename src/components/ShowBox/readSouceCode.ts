export async function readSouceCode(path: string) {
  let sourceCode = ''
  if (import.meta.env.MODE === 'development') {
    sourceCode = (await import(/* @vite-ignore */ `/packages/doc/${path}.vue?raw`)).default
  } else {
    sourceCode = await fetch(`/packages/doc/${path}.vue`).then((res) => res.text())
  }
  return sourceCode
}
