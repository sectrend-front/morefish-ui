await $`pnpm prettier`
await $`pnpm test-coverage`
await $`git add . && git cz`

console.log('test')
