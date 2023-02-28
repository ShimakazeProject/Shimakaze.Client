import { type Child, type Command } from '@tauri-apps/api/shell'

declare global {
  interface Window {

    kernel?: {
      jrpcPool: Record<string, ApiTypes.KernelCallback>
      command: Command
      child: Child
    }
  }
}

export { }
