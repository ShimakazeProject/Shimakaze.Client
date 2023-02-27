declare namespace ApiTypes {
  /**
   * JsonRPC的错误
   */
  interface IJsonRPCError {
    code: number
    message: string
    data: any
  }
  /**
   * 后端日志State
   */
  interface LogState {
    Message: string
    ContentRoot: string
    '{OriginalFormat}': string
  }
  /**
   * 后端发送的消息
   */
  export type ServerMessage = object
  /**
   * 后端日志输出
   */
  export interface LogMessage extends ServerMessage {
    EventId: number
    LogLevel: string
    Category: string
    Message: string
    State: LogState
  }
  /**
   * 后端的JsonRPC响应
   */
  export interface IJsonRPCResponse extends ServerMessage {
    jsonrpc: '2.0'
    id: string
  }
  /**
   * 后端的JsonRPC的成功响应
   */
  export interface IJsonRPCDataResponse<T> extends IJsonRPCResponse {
    result: T
  }
  /**
   * 后端的JsonRPC的失败响应
   */
  export interface IJsonRPCErrorResponse extends IJsonRPCResponse {
    error: IJsonRPCError
  }
  /**
 * 内核回调
 */
  export interface KernelCallback {
  /**
   * 成功回调
   * @param data 后端响应
   */
    resolve: (data: any) => void
    /**
   * 失败回调
   * @param data 后端响应或错误
   */
    reject: (data: any) => void
  }
}
