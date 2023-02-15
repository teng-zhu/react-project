module.exports = {
  printWidth: 120, // 一行最多 120 字符
  tabWidth: 2, // 使用 2 个空格缩进
  useTabs: false, // 不使用缩进符，而使用空格
  semi: true, // 行尾需要有分号
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 对象的 key 仅在必要时用引号
  trailingComma: 'all', // 末尾需要有逗号
  bracketSpacing: true, // 大括号内的首尾需要空格
  arrowParens: 'avoid', // 箭头函数，只有一个参数的时候，不需要括号
  rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
  rangeEnd: Infinity, // 每个文件格式化的范围是文件的全部内容
  requirePragma: false, // 不需要写文件开头的 @prettier
  insertPragma: false, // 不需要自动在文件开头插入 @prettier
  proseWrap: 'preserve', // 使用默认的折行标准
  endOfLine: 'auto', // 换行符
  htmlWhitespaceSensitivity: 'css', // 根据显示样式决定 html 要不要折行
  bracketSameLine: false, // false将多行HTML (HTML, JSX)元素的>放在最后一行的末尾，而不是单独放在下一行(不适用于自关闭元素)。
  vueIndentScriptAndStyle: false, // vue 文件中的 script 和 style 内不用缩进
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')], // fix [warn] Ignored unknown option
  importOrder: ['^vite', '^react(.*)', 'antd/(.*)', '<THIRD_PARTY_MODULES> ', '@/(.*)', '^[./]', 'public/'], // import按数组内规则进行排序
  importOrderSeparation: true, // import之间换行
  importOrderSortSpecifiers: true, // import group之间换行
};
