import { Kernel } from '@a/kernel'

export const init = async (): Promise<ApiTypes.I18n> => {
  return await Kernel.instance.call<ApiTypes.I18n>('i18n/init', 'zh-Hans')
}
