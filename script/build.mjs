await fs.readdirSync('./dist').map(fileName => fs.unlinkSync('./dist/' + fileName))
await $ `vue-tsc --noEmit && vite build`