await $`pnpm prettier`
await $`pnpm test-coverage`
await $`vue-tsc --noEmit && vite build`
