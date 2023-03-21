import * as fs from 'fs/promises'
import glob from 'glob'
import { DomUtils, parseDocument } from 'htmlparser2'
import minimatch from 'minimatch'
import { normalizePath, type Plugin } from 'vite'

interface InlineRouterContext {
  path: string
  layout?: string
  isProps: boolean
}

interface _InlineRouterContext extends InlineRouterContext {
  file: string
}

const name = 'vite-plugin-inline-router'
const virtualModuleId = 'virtual:inline-router'
const resolvedVirtualModuleId = `\0${virtualModuleId}`
let _config: InlineRouter.InlineRouterConfig

const _targets: Record<string, InlineRouterContext> = {}

const _parser = async (path: string): Promise<void> => {
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

  console.info('route:', attributes.path, 'to', importPath)

  _targets[importPath] = {
    ...attributes,
    path: attributes.path,
    isProps: 'props' in attributes
  }
}

const _defaultLayout = '(root)'
const _getLayoutName = (layout?: string): string => layout ?? _defaultLayout
const _getRouteItem = (ctx: _InlineRouterContext): string => {
  let code: string = ''
  code += '{'
  code += 'path:'
  code += ` '${ctx.path}',`
  code += 'component:'
  code += ` async () => await import('${ctx.file}').then(i => i.default),`
  if (ctx.isProps) {
    code += 'props: true,'
  }
  code += '}'
  return code
}
const _getRouteChildrenItem = (
  layout: string,
  arr: _InlineRouterContext[]
): string => {
  if (!_config.layoutHandler) {
    throw new Error("You must set the 'layoutHandler'.")
  }

  let code: string = ''
  code += '{'
  code += 'path:'
  code += ` '/>layout-${layout}',`
  code += 'component: async () =>'
  code += ` await import('${_config.layoutHandler(layout)}')`
  code += '.then(i => i.default),'
  code += 'children: [\n  '
  code += `  ${arr.map(_getRouteItem).join(',\n    ')}`
  code += '\n  ]'
  code += '}'
  return code
}

const _builder = (): string => {
  const map = Object
    .entries(_targets)
    // 将map转换为array
    .map<_InlineRouterContext>(([file, ctx]) => ({ file, ...ctx }))
    // 按layout分组
    .reduce<Record<string, _InlineRouterContext[]>>(
    (obj, i) => ({
      ...obj,
      [_getLayoutName(i.layout)]: [...(obj[_getLayoutName(i.layout)] ?? []), i]
    }), {})

  const code = Object.entries(map)
    .map(([layout, arr]) => {
      if (layout === _defaultLayout) {
        return arr.map(_getRouteItem).join(',\n  ')
      }

      return _getRouteChildrenItem(layout, arr)
    })
    .join(',\n  ')

  return `export default [\n  ${code}\n]
`
}

const inlineRouter = (config: InlineRouter.InlineRouterConfig): Plugin => {
  _config = config
  return {
    name,
    async buildStart (options) {
      await glob(config.source, {
        absolute: true
      }).then(i => i.map(_parser))
    },
    async handleHotUpdate (ctx) {
      const path = ctx.file.replace(ctx.server.config.root, '').substring(1)
      if (!minimatch(path, config.source)) {
        return
      }

      await _parser(path)

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
    },
    load (id, options) {
      if (id !== resolvedVirtualModuleId) return
      const code = _builder()
      // console.log(`\n\n${code}\n\n`)
      return code
    }
  }
}

export default inlineRouter
