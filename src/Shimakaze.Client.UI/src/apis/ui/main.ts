import { Kernel } from '@a/kernel'

export const buttons = async (): Promise<ApiTypes.Button> => {
  return await Kernel.instance.call<ApiTypes.Button>('ui/main/buttons')
}
