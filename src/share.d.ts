declare let wx: any;

interface Window {
  [key:string]: any; // Add index signature
}

declare var window: Window;

interface CallbackArgs {
  to?: any;
  shareCallBackName?: any;
  callback?: any;
}

declare var callbackArgs: CallbackArgs;
