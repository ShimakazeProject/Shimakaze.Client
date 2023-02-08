declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}
declare module '@vue/runtime-dom' {
  import type { AttributifyAttributes } from '@unocss/preset-attributify'
  // type HTMLAttributes = Record<string, any>
  interface HTMLAttributes extends AttributifyAttributes { }
}

declare module '@vue/runtime-core' {
  type AllowedComponentProps = Record<string, any>
}
export { }
