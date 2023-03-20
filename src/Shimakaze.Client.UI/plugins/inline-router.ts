import { type Plugin, normalizePath } from 'vite'
import fs from 'node:fs/promises'
import glob from 'glob'
import { parseDocument, DomUtils } from 'htmlparser2'
import { info } from 'node:console'

/**
 * Vite 行内路由插件
 * @param config 配置项
 * @author @frg2089
 */
export default function InlineRouter (): Plugin {
  // 虚拟模块Id
  const virtualModuleId = 'virtual:inline-router'
  const resolvedVirtualModuleId = '\0' + virtualModuleId
  const record: Record<string, string> = {}

  const parser = async (file: string): Promise<void> => {
    const page = '@' + normalizePath(file).substring(3)
    if (!page.startsWith('@/pages/')) return
    const code = await fs.readFile(file, { encoding: 'utf-8' })
    const dom = parseDocument(code)
    const attributes = DomUtils.getElementsByTagName(
      'template', dom, undefined, 1
    )[0]?.attribs
    if (!attributes || !('path' in attributes)) return
    info('page:', attributes.path, 'as', page)
    record[attributes.path] = page.replace('@/pages/', '@p/')
  }

  return {
    name: 'vite-plugin-inline-router',
    async buildStart () {
      await Promise.all((await glob('src/pages/**/*.vue')).map(parser))
    },
    async handleHotUpdate (ctx) {
      if (!ctx.file.endsWith('.vue')) return
      await parser(ctx.file.replace(ctx.server.config.root, '').substring(1))
    },
    resolveId (id) {
      if (id !== virtualModuleId) return
      return resolvedVirtualModuleId
    },
    load (id) {
      if (id !== resolvedVirtualModuleId) return
      const result = `export default [
  ${Object.entries(record).map(([k, v]) => `{
    path: '${k}',
    component: async () => (await import('${v}')).default
  }`).join(',\n')}
]
`
      return result
    }
  }
}
