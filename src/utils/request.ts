import { stringify } from 'qs'
import store from '@/store/index'

interface objectOptions  {
    [key: string]: any;
    [index: number]: any;
}
interface respOptions  {
    [key: string]: any;
    [index: number]: any;
}

interface bodyOption {
    url: string;
    params: object;
    headers?: object;
    type?: string;
}

const codeMessage: objectOptions = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

const checkStatus = (response: respOptions) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const errortext: string = codeMessage[response.status] || response.statusText;
    // notification.error({
    //   message: `请求错误 ${response.status}: ${response.url}`,
    //   description: errortext,
    // });
    const error: objectOptions = new Error(errortext);
    error.name = response.status;
    error.response = response;
    throw error;
};
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [option] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request({ url, option, type="" }: {url: string, option: object, type: string}) {
    console.dir(store)
    // let { role } = store.getState().userReducer;
    const options = {
        ...option,
    };

    const defaultOptions = {
        // credentials: 'include',
    };
    const newOptions: any = { ...defaultOptions, ...options };
    if (
        newOptions.method === 'POST' ||
        newOptions.method === 'GET' ||
        newOptions.method === 'PUT' ||
        newOptions.method === 'DELETE'
    ) {
        if (!(newOptions.body instanceof FormData)) {
        newOptions.headers = {
            "Access-Control-Allow-Origin": "*",
            "Accept": 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            ...newOptions.headers,
        };
        type==='noStr' && (newOptions.body = JSON.stringify(newOptions.body));
        } else {
        // newOptions.body is FormData
        newOptions.headers = {
            "Access-Control-Allow-Origin": "*",
            "Accept": 'application/json',
            ...newOptions.headers,
        };
        }
    } else if ( newOptions.method === 'GET' ) {
        newOptions.headers = {
        "Access-Control-Allow-Origin": "*",
        "Accept": 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
        };
    }
    // newOptions.headers["uuid"] = role.uuid;
    return fetch('/api' + url, newOptions)
    .then(checkStatus)
    .then(response => {
      // DELETE and 204 do not return data by default
      // using .json will report an error.
      if (newOptions.method === 'DELETE' || response.status === 204) {
        return response.text();
      }
      return response.json();
    })
    .then( response=> {
      if ((response.status >= 200 && response.status < 300)|| !response.status) {
          return response || {};
      } else {
        const errortext = response.message || codeMessage[response.status];
        if(response.status >= 400 && response.status <= 600){
          return {message: errortext}
        } else {
          // message.warning(errortext);
          return {message: errortext}
        }
      }
    })
    .catch(e => {
      console.log("error", e)
      return
    });
}

export function requestGet({url, params={}, headers = {}, type=""}: bodyOption){
  return request({
    url: `${url}${params? '?' + stringify(params): ""}`, 
    option: { 
      method: 'GET', 
      headers:headers 
    },
    type
  })
}

export function requestPost({url, params={}, headers = {}, type=""}: bodyOption){
    return request({
        url, 
        option:{
            method: 'POST',
            body: params,
            headers:headers,
        },
        type
    });
}

export function requestPut({url, params={}, headers = {}, type=""}: bodyOption){
    return request({
        url, 
        option:{
            method: 'PUT',
            body: params,
            headers:headers
        },
        type
    });
}

export function requestDel({url, params={}, headers = {}, type=""}: bodyOption){
    return request({
        url,
        option:{
            method: 'DELETE',
            body: params,
            headers:headers
        },
        type
    });
}