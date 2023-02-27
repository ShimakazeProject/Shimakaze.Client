import * as api from '@a/i18n'

let current: ApiTypes.I18n | undefined
let failback: ApiTypes.I18n | undefined

export const init = async (
  currentLang?: string,
  failbackLang?: string
): Promise<void> => {
  if (currentLang) {
    current = await api.init(currentLang)
  }
  if (failbackLang) {
    failback = await api.init(failbackLang)
  }
  document.querySelector('html')
    ?.setAttribute(
      'lang',
      current?.metadata.language ??
      failback?.metadata.language ??
      'undefined'
    )
}

export const get = (key: string): string =>
  current?.lang[key] ??
  failback?.lang[key] ??
  key

export const getMetadata = (): {
  current?: ApiTypes.I18nMetadata
  failback?: ApiTypes.I18nMetadata
} => ({ current: current?.metadata, failback: failback?.metadata })
