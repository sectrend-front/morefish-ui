export async function readSouceCode(path: string) {
  let sourceCode = ''
  if (import.meta.env.MODE === 'development') {
    sourceCode = (await import(/* @vite-ignore */ `/src/doc/${path}.vue?raw`)).default
    // sourceCode = await fetch(`/src/doc/${path}.vue?raw`).then((res) => res.text())
  } else {
    sourceCode = await fetch(`../doc/${path}.vue`).then((res) => res.text())
  }
  return sourceCode
}
