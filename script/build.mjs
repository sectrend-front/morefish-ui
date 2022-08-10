await fs.readdirSync('./dist').map((fileName) => fs.unlinkSync('./dist/' + fileName))
await $`pnpm prettier`
await $`pnpm test-coverage`
await $`vue-tsc --noEmit && vite build`
