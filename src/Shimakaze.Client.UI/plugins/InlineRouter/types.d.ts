declare namespace InlineRouter {
  export interface InlineRouterConfig {
    /** 导入路径的前缀 例如 '@' */
    // importPrefix: string
    /** 将要被处理的文件(glob) */
    source: string
    /** 项目的根目录 */
    base: string
    /**
     * 路径处理器，用于将相对于项目的路径转换成使用别名的路径
     *
     * 例如
     * ```js
     * s => s.replace('/src', '@')
     * ```
     * @param path 路径
     */
    pathHandler: (path: string) => string
    /**
     * 通过布局名获取布局文件绝对路径
     * @param layout 布局名
     */
    layoutHandler?: (layout: string) => string
  }
}
