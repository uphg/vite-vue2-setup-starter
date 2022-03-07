import fs from 'fs'
import p from 'path'

const iconPrefix = 'icon'
const reSvgPerfix = /<svg([^>+].*?)>/ 
const reViewBox = /(?<=\bviewBox=")[^"]+\b/
// const reHeightOrWidth = /(width|height)="([^>+].*?)"/g
const reEnterOrNewline = /(\r)|(\n)/g
const reSvgContent = /(?<=<svg[^>]+>).*(?=<\/svg>)/g
const reAirSuffix = /\s+(?=\/\>)/g // 将所有 “/>” 后缀前的空格去掉

const getMatch = (rule, text) => rule.exec(text)?.[0] || ''

export const readdir = (filePath): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    fs.readdir(filePath, (error, fileList) => {
      if (error) return reject(error)
      resolve(fileList)
    })
  })
}
export const isFile = (fileDir): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    fs.stat(fileDir, async (error, state) => {
      if (error) return reject(error)
      resolve(state.isFile())
    })
  })
}

export const isDirectory = (fileDir): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    fs.stat(fileDir, async (error, state) => {
      if (error) return reject(error)
      resolve(state.isDirectory())
    })
  })
}

export const createSymbolTag = (content, name) => {
  const svgBefore = getMatch(reSvgPerfix, content)
  const viewBox = getMatch(reViewBox, svgBefore)
  const main = content.match(reSvgContent)[0]
  let symbol = `<symbol id="${iconPrefix}-${name}" viewBox="${viewBox}">`

  symbol += main.replace(/fill="currentColor"/g, '').replace(reEnterOrNewline, ' ').replace(reAirSuffix, '')
  symbol += `</symbol>`

  return symbol
}

export const getSymbolTag = (dir, name): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(dir, 'utf-8', (error, content) => {
      const result = createSymbolTag(content, name)
      if (!result) return false
      resolve(result)
    })
  })
}

export async function accumulate(path: string, data='') {
  const filePath = p.resolve(path)
  const fileList = await readdir(filePath)
  for (let i = 0; i < fileList.length; i++) {
    const fileName = fileList[i]
    const fileDir = p.join(filePath, fileName)
    const suffix = p.extname(fileDir)
    if (await isFile(fileDir) && suffix && suffix === '.svg') {
      const result = await getSymbolTag(fileDir, fileName.replace('.svg', ''))
      data += result
    } else if(await isDirectory(fileDir)) {
      data = await accumulate(fileDir, data)
    }
  }
  return data
}