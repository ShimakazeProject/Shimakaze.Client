import { Command } from '@tauri-apps/api/shell'
import { once, TauriEvent } from '@tauri-apps/api/event'

// =====================================
//
//                类型守卫
//
// =====================================

/**
 * 类型守卫 - 判断后端返回的数据是否是一个JsonRPC Response对象
 * @param response 后端返回的数据
 * @returns 是否是一个JsonRPC Response对象
 */
const isLogMessage = (response: ApiTypes.ServerMessage):
  response is ApiTypes.LogMessage => 'LogLevel' in response

/**
 * 类型守卫 - 判断后端返回的数据是否是一个JsonRPC Response对象
 * @param response 后端返回的数据
 * @returns 是否是一个JsonRPC Response对象
 */
const isJsonRPCResponse = (response: ApiTypes.ServerMessage):
  response is ApiTypes.IJsonRPCResponse => 'jsonrpc' in response
/**
 * 类型守卫 - 判断后端返回的JsonRPC是否是数据Response
 * @param response JsonRPC Response对象
 * @returns 是否是数据Response
 */
const isDataResponse = <T>(response: ApiTypes.IJsonRPCResponse):
  response is ApiTypes.IJsonRPCDataResponse<T> => 'result' in response
/**
 * 类型守卫 - 判断后端返回的JsonRPC是否是错误Response
 * @param response JsonRPC Response对象
 * @returns 是否是数据Response
 */
const isErrorResponse = (response: ApiTypes.IJsonRPCResponse):
  response is ApiTypes.IJsonRPCErrorResponse => 'error' in response

// =====================================
//
//                后端内核
//
// =====================================

/**
 * 调用后端方法
 * @param method 方法名
 * @param params 方法参数
 * @returns 后端响应
 */
export const call = async <T>(
  method: string, ...params: any[]
): Promise<T> => {
  if (!window.kernel) {
    throw new Error('must be inited')
  }
  let id = crypto.randomUUID()
  const result = new Promise<T>(
    (resolve, reject) => {
      if (!window.kernel) {
        throw new Error('must be inited')
      }
      while (id in window.kernel.jrpcPool) {
        id = crypto.randomUUID()
      }

      window.kernel.jrpcPool[id] = { resolve, reject }
    })

  const request = { jsonrpc: '2.0', method, id, params }

  await window.kernel.child.write(JSON.stringify(request) + '\n')

  return await result
}
/**
 * 数据解析器
 * @param json 后端发送的数据
 */
const parser = (json: string): void => {
  try {
    // 尝试解析JSON数据
    const data = JSON.parse(json)

    if (isLogMessage(data)) {
      // 判断是否是服务器日志
      console.info(
        `[${data.LogLevel}] ${data.Category}: ${data.Message}`,
        data)
    } else if (isJsonRPCResponse(data)) {
      // 判断是否是JsonRPC响应
      const callback = window.kernel?.jrpcPool[data.id]
      // 根据Id去JsonRPC池中找对应的回调
      if (!callback) {
        // 找不到回调
        console.warn('不被需要的响应', data)
      } else if (isDataResponse<object>(data)) {
        // 后端函数执行成功回调
        callback.resolve(data.result)
      } else if (isErrorResponse(data)) {
        // 后端函数执行失败回调
        callback.reject(data.error)
      } else {
        // 未知的JsonRPC响应类型
        console.warn('未知的JsonRPC响应类型', data)
      }
    } else {
      console.log(data)
    }
  } catch (error) {
    console.error(error)
  }
}

if (!window.kernel) {
  const jrpcPool: Record<string, ApiTypes.KernelCallback> = {}
  const command = new Command(
    'Shimakaze.Client.Kernel',
    'bin/Shimakaze.Client.Kernel.dll'
  )
  const child = await command.spawn()
  command.stdout.on('data', parser)
  command.stderr.on('data', console.error)
  const close = (): void => {
    child.kill().catch(console.error)
  }
  window.addEventListener('unload', close)
  window.addEventListener('close', close)
  await once(TauriEvent.WINDOW_DESTROYED, close)

  window.kernel = {
    jrpcPool,
    command,
    child
  }
}
export const system = async (): Promise<string[]> =>
  await call<string[]>('system/methods')
