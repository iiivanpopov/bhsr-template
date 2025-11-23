import { config } from '@/config'
import { logger } from '@/lib'

Bun.build({
  entrypoints: ['./src/app/main.ts'],
  outdir: './dist',
  minify: true,
  sourcemap: config.env.development ? 'linked' : 'none',
  naming: 'index.js',
  define: {
    'process.env.NODE_ENV': `"${config.env.node}"`,
    'import.meta.env.NODE_ENV': `"${config.env.node}"`,
  },
  target: 'bun',
  format: 'esm',
})
  .then(data => logger.info(`size: ${(data.outputs[0]!.size / 1024).toFixed(2)}kB`))
  .catch(error => logger.error(error))
