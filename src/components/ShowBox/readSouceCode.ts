export async function readSouceCode(path: string) {
  let sourceCode = ''
  if (import.meta.env.MODE === 'development') {
    sourceCode = (await import(/* @vite-ignore */ `/src/doc/${path}.vue?raw`)).default
  } else {
    sourceCode = await fetch(`/src/doc/${path}.vue`).then((res) => res.text())
  }
  return sourceCode
}
