import { call } from '@a/kernel'

export const buttons = async (): Promise<ApiTypes.Button[]> => {
  return await call<ApiTypes.Button[]>('ui/main/buttons')
}
