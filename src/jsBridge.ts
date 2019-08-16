import { any } from "prop-types";

interface BridgeParam {
  [key: string]: any;
}

// 自增回调索引
let callbackIndex = 0;
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
export default function jsBridge (
  namespace: string,
  api: string,
  param: BridgeParam,
  scheme: string = 'chelunJSBridge'
): string {
  let url = `${scheme}://${namespace}/${api}`;

  // 如果没有参数选项，直接发送请求
  if (!param || typeof param !== "object") {
    sendRequest(url);
    return url;
  }

  let hashIndex: undefined | number = undefined;
  let pairs: Array<string> = [];

  for (let key in param) {
    if (!param.hasOwnProperty(key)) {
      continue;
    }
    if (typeof param[key] === "function") {
      let callbackIndex = generateIndex(param[key]);
      if (key === "callback") {
        hashIndex = callbackIndex;
      } else {
        pairs.push(`${encodeURIComponent(key)}=${callbackIndex}`);
      }
      continue;
    }

    pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(param[key])}`);
  }

  // 判断是否有参数
  if (pairs.length > 0) {
    url += `?${pairs.join("&")}`;
  }

  // 判断是否有hash统一回调
  if (hashIndex !== undefined && typeof hashIndex === "number") {
    url += `#${hashIndex}`;
  }

  sendRequest(url);
  return url;
}

function generateIndex(callback: () => void): number {
  callbackIndex += 1;
  (<any>window)[`__MCL_CALLBACK_${callbackIndex}`] = callback;
  return callbackIndex;
}

function sendRequest(url: string): void {
  const temp = document.createElement("iframe");
  document.body.appendChild(temp);
  temp.style.display = "none";
  temp.src = url;
  temp.onload = () => {
    temp.remove();
  };
  // 安卓客户端会出现异常
  // window.setTimeout(() => {
  //   temp.remove();
  // }, 0);
}
