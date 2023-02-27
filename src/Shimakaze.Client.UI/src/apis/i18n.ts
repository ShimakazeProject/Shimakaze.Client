import { call } from '@a/kernel'

export const init = async (
  lang: string
): Promise<ApiTypes.I18n> =>
  await call('i18n/init', lang)
