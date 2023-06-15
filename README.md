# 武汉理工大学智慧图书馆

##模型需额外下载,如有需要请联系我:2677423874@qq.com / speakmanrockwell30681@gmail.com

## 参考资料

### Dev

- [Vue 中文文档](https://cn.vuejs.org/)
  前端框架
 - [Vue 目录结构](https://juejin.cn/post/7053455302041010189)
- [Three.js 中文文档](https://threejs.org/docs/index.html#manual/zh/introduction/Creating-a-scene)
- [Vite 中文文档](https://cn.vitejs.dev/guide/)
  构建工具
- [MDN 中文文档](https://developer.mozilla.org/zh-CN/)
  前端开发百科

### Ops

- [Codeup 帮助文档](https://thoughts.teambition.com/sharespace/5d88b152037db60015203fd3/docs/5dc4f6756b81620014ef7571)
- [Git 和 Gitlens 基本用法](https://blog.csdn.net/high32/article/details/111941127)
  - [Git-LFS 大文件存储](https://help.aliyun.com/document_detail/203101.html)
- [pnpm 文档](https://pnpm.io/zh/)
  前端包管理器，对 npm 进行了改进
- [VScode 文档](https://code.visualstudio.com/docs)
  代码编辑器
  - [VScode 快捷键](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
    - `Ctrl+~` 切换内置命令行

## 开发配置

### 安装依赖

```sh
# 使用 pnpm
pnpm install
# 使用 yarn
yarn install
```

### 启动开发环境 localhost:5173

```sh
# 使用 pnpm
pnpm dev
# 使用 yarn
yarn dev
```

### 打包发布环境 /dist

```sh
# 使用 pnpm
pnpm buiid
# 使用 yarn
yarn build
```

### 使用 [Prettier](https://prettier.io) 格式化代码

```sh
# 使用 pnpm
pnpm prettier --write .
# 使用 yarn
yarn prettier --write .
```

### 运行 [Vitest](https://vitest.dev/) 单元测试

```sh
# 使用 pnpm
pnpm test:unit
# 使用 yarn
yarn test:unit
```

### 使用 [ESLint](https://eslint.org/) 检查代码

```sh
# 使用 pnpm
pnpm lint
# 使用 yarn
yarn lint
```
