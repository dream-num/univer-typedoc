import fs from 'node:fs'
import path from 'node:path'
import URL from 'node:url'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const typedocPath = path.resolve(__dirname, '../src/pages/')

const metaJSON = {
  '@univerjs': {
    display: 'children',
  },
}

fs.writeFileSync(path.resolve(typedocPath, '_meta.json'), JSON.stringify(metaJSON, null, 2))

const docPaths = fs.readdirSync(path.resolve(typedocPath, './@univerjs'))

const docJSON = docPaths.reduce((acc, docPath) => {
  const docPathStat = fs.statSync(path.resolve(typedocPath, './@univerjs', docPath))
  if (docPathStat.isDirectory()) {
    acc[docPath] = {
      title: `@univerjs/${docPath}`,
      theme: {
        collapsed: true,
      },
    }
  }

  return acc
}, {
  README: 'README',
})

// HACK:
const READMEContent = fs.readFileSync(path.resolve(typedocPath, './README.md'), 'utf8')
console.log(READMEContent.replaceAll('(@univerjs/', '('))
fs.writeFileSync(path.resolve(typedocPath, './README.md'), (READMEContent.replaceAll('(@univerjs/', '(')))

fs.renameSync(path.resolve(typedocPath, './README.md'), path.resolve(typedocPath, './@univerjs/README.md'))
fs.writeFileSync(path.resolve(typedocPath, './@univerjs/_meta.json'), JSON.stringify(docJSON, null, 2))
