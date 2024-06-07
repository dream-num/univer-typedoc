import fs from 'node:fs'
import path from 'node:path'
import URL from 'node:url'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const packagesPath = path.resolve(__dirname, '../submodules/univer/packages')

const packages = fs.readdirSync(packagesPath)

const ignorePackages = [
  '@univerjs/debugger',
  '@univerjs/design',
  '@univerjs/umd',
]

for (const pkg of packages) {
  const packagePath = path.resolve(packagesPath, pkg)
  const packageJsonPath = path.resolve(packagePath, 'package.json')

  if (!fs.existsSync(packageJsonPath))
    continue

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))

  if (ignorePackages.includes(packageJson.name))
    continue

  const typedocJson = {
    entryPoints: ['./src/index.ts'],
    name: packageJson.name,
    includeVersion: true,
    readme: 'none',
  }

  const targetPath = path.resolve(packagePath, 'typedoc.json')
  fs.writeFileSync(targetPath, JSON.stringify(typedocJson, null, 2))
}
