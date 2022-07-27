console.log(`🚀 ~ packages/pack1`, new Date());

export function hello(name) {
  console.log(`🚀 ~ Hello ${name}`);
}
// package.json 未配置 "type": "module" 则使用下面的方式 export 模块
// module.exports = { hello };
