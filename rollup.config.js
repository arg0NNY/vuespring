const typescript = require('@rollup/plugin-typescript')
const del = require('rollup-plugin-delete')
const pkg = require('./package.json')

const banner = `/**
 * VueSpring ${pkg.version}
 * ${pkg.author} (c) ${new Date().getFullYear()}
 * @license MIT
 */`

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      banner,
    },
    {
      file: pkg.module,
      format: 'es',
      banner,
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript(),
    del({ targets: 'dist/*' })
  ],
}
