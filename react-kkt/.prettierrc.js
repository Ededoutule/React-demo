
module.exports = {
  trailingComma: "none",

  singleQuote: true,
  // 每行末尾自动添加分号
  semi: false,
  // tab缩进大小,默认为2
  tabWidth: 2,
  // 使用tab缩进，默认false
  useTabs: false,
  // 对象中打印空格 默认true
  // true: { foo: bar }
  // false: {foo: bar}
  bracketSpacing: true,
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如x => x
  // always 总是有括号
  arrowParens: 'avoid',
  // 换行长度，默认80
  printWidth: 80,
  jsxBracketSameLine: true,
  insertPragma: false,
  requirePragma: false,
}
  // 常用配置相关解释
// printWidth: 100, // 超过最大值换行
// tabWidth: 4, // 缩进字节数
// useTabs: false, // 缩进不使用tab，使用空格
// semi: true, // 句尾添加分号
// singleQuote: true, // 使用单引号代替双引号
// proseWrap: "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
// arrowParens: "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
// bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
// disableLanguages: ["vue"], // 不格式化vue文件，vue文件的格式化单独设置
// endOfLine: "auto", // 结尾是 \n \r \n\r auto
// eslintIntegration: false, //不让prettier使用eslint的代码格式进行校验
// htmlWhitespaceSensitivity: "ignore",
// ignorePath: ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
// jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
// jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
// parser: "babylon", // 格式化的解析器，默认是babylon
// requireConfig: false, // Require a 'prettierconfig' to format prettier
// stylelintIntegration: false, //不让prettier使用stylelint的代码格式进行校验
// trailingComma: "es5", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
// tslintIntegration: false // 不让prettier使用tslint的代码格式进行校验
