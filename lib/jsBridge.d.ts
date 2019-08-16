interface BridgeParam {
    [key: string]: any;
}
/**
 * 客户端 JSBridge 调用
 * @param namespace 命名空间，如device，方便API管理；
 * @param api API的名称；
 * @param param 可选参数
 * @return
 *
 *  调用示例：
 *
 *   import { jsBridge } from 'cl-util';
 *
 *   jsBridge('device','chooseImage', { type: 0 })
 *
 *  详情请参见 http://doc.oa.com/pages/viewpage.action?pageId=6521734
 */
export default function jsBridge(namespace: string, api: string, param: BridgeParam, scheme?: string): string;
export {};
