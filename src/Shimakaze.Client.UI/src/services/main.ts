import { buttons } from '@a/ui/main'
import { get } from './i18n'

export const getMainMenus = async (): Promise<Services.Button[]> => {
  const btns = await buttons()
  return btns.map(btn => ({
    name: get(btn.uid),
    path: btn.target
  }))
}
