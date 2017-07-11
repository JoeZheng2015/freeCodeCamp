# Http

## Http 中类的关系

[http](https://nodejs.org/dist/v8.1.2/docs/api/http.html) 5 个类的关系

`http.Server` 和 `http.ClientRequest` 是对应的：
- `http.Server` 类的实例，由 `http.createServer` 返回，定位是服务器
- `http.ClientRequest` 类的实例，由 `http.request` 和 `http.get` 返回，定位是客户端

`http.ServerResponse` 和 `http.IncomingMessage` 是对应的：
- `http.ServerResponse` 类的实例，存在于响应请求的地方，如 `http.createServer((req, res) => {})` 中的 `req`
- `http.IncomingMessage` 类的实例，存在于 coming 数据的地方，如 `http.createServer((req, res) => {})` 中的 `res` 或者 `http.request(options, (res) => {})` 中的 `res`

- `http.Agent` 类感觉像是配置 `http.ClientRequest` 的


## 实现的流

- `http.ClientRequest` 实现可写流的接口，所以有 `write` `end` 等方法
- `http.IncomingMessage` 实现了可读流的接口，所以有 `data` `end` 等事件

- `http.Server` 没有实现流
- `http.ServerResponse` 实现了可写流接口，所以有 `write` `end` 等方法

## 关键事件

- `http.Server` 的 `request` 事件用于接收请求，`http.createServer([requestListener])` 中的 `requestListener` 就是被自动添加到 `request` 事件上的

- `http.ClientRequest` 的 `reponse` 事件用于接收返回，`http.request(options[, callback])` 的 `callback` 就是被自动添加到 `response` 事件上的

## 应用

对于客户端
- 在 `http.ClientRequest` 实例上通过 `write` `end` 方法发送数据
- 监听 `response` 事件，接收数据

对于服务器端
- 监听 `request` 事件，接收数据
- 在 `http.ServerResponse` 实例上通过 `write` `end` 方法返回数据
