# vite-react

- yarn create vite => react
- yarn add antd-mobile@next
- yarn add react-router
- yarn add react-router-dom
- yarn add less

### 工具类

- yarn add moment
- yarn add lodash

### 主题色配置

theme [config](./src/theme.css)

### 按需引用(antd-mobile)， vite 自动支持 js 按需引入，组件需要对 css 进行按需引入

- yarn add vite-plugin-import -D
  支持组件库有（antd, antd-mobile）
- yarn add vite-plugin-style-import -D
  支持组件库有（antd, ant-design-vue, vant, element-plus，@nutui/nutui)

### sourcemap

build.sourcemap

本地打包推送到 github, 服务器直接从 github 拉取
