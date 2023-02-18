import { type Child, Command } from '@tauri-apps/api/shell'

interface IDataResponse<T> {
  jsonrpc: '2.0'
  result: T
  id: string
}

interface IErrorResponse {
  jsonrpc: '2.0'
  error: {
    code: number
    message: string
    data: any
  }
  id: string
}

type IJsonRPCResponse<T> = IDataResponse<T> | IErrorResponse
function isDataResponse<T> (response: IJsonRPCResponse<T>): response is IDataResponse<T> {
  return 'result' in response
}
function isJsonRPCResponse<T> (response: any): response is IJsonRPCResponse<T> {
  return 'jsonrpc' in response
}

/**
 * 后端内核
 */
export class Kernel {
  /**
   * 单例设计
   */
  private static _instance?: Kernel = undefined

  /**
   * 获取唯一的内核控制器实例
   */
  public static get instance (): Kernel {
    return (Kernel._instance ??= new Kernel())
  }

  private readonly _ready: Promise<Child>
  private readonly _command: Command
  private readonly _pool = new Map<string, {
    resolve: (data: any) => void
    reject: (data: any) => void
  }>()

  private constructor () {
    this._command = new Command('Shimakaze.Client.Kernel', 'bin/Shimakaze.Client.Kernel.dll')

    this._command.stdout.on('data', this._stdout)
    this._command.stderr.on('data', this._stderr)
    let _child: Child
    this._ready = new Promise((resolve, reject) => {
      if (_child) {
        resolve(_child)
      } else {
        this._command.spawn().then(v => {
          _child = v
          resolve(_child)
        }).catch(reject)
      }
    })
  }

  public async call<T> (method: string, ...params: any[]): Promise<T> {
    const _child = await this._ready

    let id = crypto.randomUUID()
    const result = new Promise<T>((resolve, reject) => {
      while (this._pool.has(id)) {
        id = crypto.randomUUID()
      }

      this._pool.set(id, { resolve, reject })
    })

    const request = { jsonrpc: '2.0', method, id, params }

    await _child.write(JSON.stringify(request) + '\n')

    return await result
  }

  private readonly _stdout = (raw: string): void => {
    const data = JSON.parse(raw)

    if (isJsonRPCResponse(data)) {
      this._jsonRPCResponseHandler(data)
    } else {
      this._logger(data)
    }
  }

  private readonly _jsonRPCResponseHandler = (data: IJsonRPCResponse<any>): void => {
    const callback = this._pool.get(data.id)
    if (callback == null) {
      console.log('找不到请求的响应', data)
      return
    }

    const { resolve, reject } = callback

    if (isDataResponse(data)) {
      resolve(data.result)
    } else {
      reject(data.error)
    }
  }

  private readonly _stderr = (data: any): void => {
    console.error(data)
  }

  private readonly _onerror = (e: any): void => {
    console.error(e)
  }

  private readonly _logger = (log: any): void => {
    console.log('日志', log)
  }
}

export const system = async (): Promise<string[]> => {
  return await Kernel.instance.call<string[]>('system/methods')
}
