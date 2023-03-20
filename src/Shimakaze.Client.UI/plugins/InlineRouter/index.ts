import * as fs from 'fs/promises'
import glob from 'glob'
import { DomUtils, parseDocument } from 'htmlparser2'
import minimatch from 'minimatch'
import { normalizePath, type Plugin } from 'vite'

interface InlineRouterContext {
  path: string
  layout?: string
}

const name = 'vite-plugin-inline-router---'
const virtualModuleId = 'virtual:inline-router---'
const resolvedVirtualModuleId = `\0${virtualModuleId}`
let _config: InlineRouter.InlineRouterConfig

const builderVar: Record<string, InlineRouterContext> = {}

const parser = async (path: string): Promise<void> => {
  // 用于在虚拟文件中导入用的路径
  const importPath = _config.pathHandler(
    normalizePath(
      path.replace(_config.base, '')
    )
  )

  const vueCode = await fs.readFile(path, { encoding: 'utf-8' })

  const dom = parseDocument(vueCode)

  const attributes = DomUtils.getElementsByTagName(
    'template',
    dom,
    undefined,
    1
  )[0]?.attribs

  if (!attributes || !('path' in attributes)) return

  console.info('page:', attributes.path, 'as', importPath)

  builderVar[importPath] = {
    path: attributes.path,
    ...attributes
  }
}

const inlineRouter = (config: InlineRouter.InlineRouterConfig): Plugin => {
  _config = config
  return {
    name,
    async buildStart (options) {
      await glob(config.source, {
        absolute: true
      }).then(i => i.map(parser))
    },
    async handleHotUpdate (ctx) {
      const path = ctx.file.replace(ctx.server.config.root, '').substring(1)
      if (!minimatch(path, config.source)) {
        return
      }

      await parser(path)

      ctx.server.ws.send({
        type: 'update',
        updates: [
          {
            type: 'js-update',
            path: name,
            acceptedPath: name,
            timestamp: new Date().getTime()
          }
        ]
      })
    },
    resolveId (source, importer, options) {
      if (source !== virtualModuleId) return
      return resolvedVirtualModuleId
    }
  }
}

export default inlineRouter
