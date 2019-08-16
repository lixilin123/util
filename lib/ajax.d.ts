/// <reference path="../src/ajax.d.ts" />
declare type ajaxCb = (res?: any) => void;
interface AjaxOption {
    url: string;
    method?: string;
    data?: any;
    headers?: any;
    credentials?: string;
    loadingTimeLimit?: number;
    showLoading?: false;
    timeLimit?: number;
    onTimeOut?: ajaxCb;
    onLoad?: ajaxCb;
    onError?: ajaxCb;
    transmitParam?: boolean;
}
export default function ajax(option: AjaxOption): void;
export declare function get(): void;
export declare function post(url: string): void;
export {};
