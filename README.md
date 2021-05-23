# webpack 多配置

包含的配置：

- 基础配置
  包含入口、出口、模块解析规则命令行友好提示、错误捕获和处理、基础插件。
- 开发环境配置
  HRM、不需要压缩处理和文件指纹的模块解析规则。
- 生产环境配置
  文件压缩、文件指纹、打包速度和体积优化。
- ssr 环境配置
  和生产环境配置类似，对构建的产物需要指定 library 的 type，忽略 css 解析。

## 目录结构简要说明

- config 配置源码
- test 测试用例
- src 构建目标

## 可用的命令

- serve - 开启开发环境
- build - 构建生产包
- build:ssr - 构建 ssr 包
- eslint - eslint 检测
- test:smoke - 冒烟测试
- test:unit - 单元测试
