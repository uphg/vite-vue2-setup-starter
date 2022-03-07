import { accumulate } from './utils'

export default function svgSprite (path: string) {
  if (path === '') return
  return {
    name: 'svg-sprite',
    async transformIndexHtml(html): Promise<string> {
      const result = await accumulate(path)
      return html.replace(
        '<body>',
        `<body>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0; overflow: hidden;">
              ${result}
            </svg>`
      )
    }
  }
}