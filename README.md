# yyl-request
对 [request](https://github.com/request/request) 组件进行 promise 封装， 对最后一个 callback 参数进行改造

## install
```
npm i yyl-request --save
```

## 引用
```
const extRequest = require('yyl-request');
const request = extRequest.origin;
```

## API
### extRequest.origin
```
/**
 * @return {Function} request
 */
extRequest.origin
```

### extRequest(url);
```
/**
 * @param  {String}  url              请求地址
 * @return {Promise} [err, res, body]
 * @param {Error}    err              请求错误对象
 * @param {Object}   res              返回的 response 对象
 * @param {body}     body             返回的 请求 body 内容
 */
extRequest(url);
```

### extRequest(opt);
opt 参数具体参考 [这里](https://github.com/request/request#multipartrelated)
```
/**
 * @param  {String}  opt              请求参数
 * @return {Promise} [err, res, body]
 * @param {Error}    err              请求错误对象
 * @param {Object}   res              返回的 response 对象
 * @param {body}     body             返回的 请求 body 内容
 */
extRequest(opt);
```

### extRequest.post(url);

```
/**
 * post 请求
 * @param  {String}  url              请求地址
 * @return {Promise} [err, res, body]
 * @param {Error}    err              请求错误对象
 * @param {Object}   res              返回的 response 对象
 * @param {body}     body             返回的 请求 body 内容
 */
extRequest.post(url);
```

### extRequest.post(url, opt);
opt 参数 具体参考 [这里](https://github.com/request/request#forms)

```
/**
 * post 请求
 * @param  {String}  url              请求地址
 * @param  {Object}  opt              参数
 * @return {Promise} [err, res, body]
 * @param {Error}    err              请求错误对象
 * @param {Object}                    返回的 response 对象
 * @param {body}                      返回的 请求 body 内容
 */
extRequest.post(url, opt);
```

### extRequest.get(url, opt);
opt 参数 具体参考 [这里](https://github.com/request/request#forms)
```
/**
 * get 请求
 * @param  {String}  url              请求地址
 * @param  {Object}  opt              参数
 * @return {Promise} [err, res, body]
 * @param {Error}    err              请求错误对象
 * @param {Object}                    返回的 response 对象
 * @param {body}                      返回的 请求 body 内容
 */
extRequest.get(url, opt);
```
