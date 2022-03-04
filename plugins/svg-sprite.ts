import { Plugin } from 'vite'
import { readFileSync, readdirSync } from 'fs'

// .*? 懒惰匹配
const reSvgPerfix = /<svg([^>+].*?)>/ 
const reViewBox = /(viewBox="[^>+].*?")/g
const reHeightOrWidth = /(width|height)="([^>+].*?)"/g
const reEnterOrNewline = /(\r)|(\n)/g

const findSvgFile = (mkdir) => {
  const result = []
  const files = readdirSync(mkdir, {
    withFileTypes: true
  })

  for (const file of files) {
    if (file.isDirectory()) {

    } else if () {
      
    }
  }

  return result
}