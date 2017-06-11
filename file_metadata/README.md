# 获取上传文件信息
简介：提供一个用于上传文件的页面，在上传文件后，返回文件的大小信息。

## 使用
``` bash
npm i
node file_metadata
```

## 思路
- 使用 fs 读取 index.html 文件座位上传页面
- 使用 type 为 file 的 input 上传文件
- 使用 multer 中间件获取文件信息


## 学习到的知识点
- 全局变量 [__dirname](https://nodejs.org/docs/latest/api/globals.html#globals_dirname) 是运行文件的文件夹，与运行路径无关
- 使用 [path.resolve](https://nodejs.org/docs/latest/api/path.html#path_path_resolve_paths) 来解析路径
- [multer](https://github.com/expressjs/multer) 中 `.single(fieldname)` 的字段名，指的是 input 的 name