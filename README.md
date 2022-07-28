# pnpm monorepo

## 使用

- 常用命令

```sh
# -F, --filter <package_name> 可以指定目标 package 执行任务
# pnpm --filter <package_selector> <command>
# pnpm i -F <package_name> <node_package>
pnpm -F @packages/components add lodash

# 这个命令表示在@packages/components安装@packages/utils
# 其中的@*表示默认同步最新版本，省去每次都要同步最新版本的问题
pnpm -F @packages/components add @packages/utils@*
```

- `pnpm-workspace.yaml` 配置

```yaml
packages:
  - 'packages/*'
  - 'projects/*'
```

- `package.json` 配置

```json
// 为防止使用其他的包管理器运行 npm install 或 yarn
// 可以将下面的这个 preinstall 脚本添加到您的 package.json：
// 运行 npm install 或 yarn，就会发生错误并且不会继续安装
"scripts": {
  "preinstall": "npx only-allow pnpm"
}

// type 字段指定使用ESModule模块化规范
"type": "module",

// 除了一些全局生效的命令之外，像我们可以按需求配置执行 project 的启动和打包
// root pkg.json
"script": {
    "dev:demo": "pnpm -F demo dev",
    "build:demo": "pnpm -F demo build"
}

// demo pkg.json
"scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview"
}

```

## 代码管理

### 项目 Git 设置

```sh
git config user.name "Juching"
git config user.email "azhucheng1@qq.com"
```

### 创建 git 仓库

```sh
mkdir vue3_vite
cd vue3_vite
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/juching/vue3_vite.git
git push -u origin "master"
```

### 已有仓库?

```sh
cd existing_git_repo
git remote add origin https://gitee.com/juching/vue3_vite.git
git push -u origin "master"
```

### Git 提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中
