# Utils Demo

一个使用 Vitest 进行单元测试的工具函数库示例项目。

## 安装依赖

```bash
npm install
```

## 项目结构

```
├── src/                  # 源代码
│   ├── index.ts          # 入口文件
│   ├── math.ts           # 数学工具函数
│   ├── string.ts         # 字符串工具函数
│   └── array.ts          # 数组工具函数
├── tests/                # 测试文件
│   ├── math.test.ts      # 数学工具函数测试
│   ├── string.test.ts    # 字符串工具函数测试
│   └── array.test.ts     # 数组工具函数测试
├── package.json          # 项目配置
├── tsconfig.json         # TypeScript 配置
└── vitest.config.ts      # Vitest 配置
```

## 可用脚本

### 运行测试（监听模式）

```bash
npm test
```

### 运行测试（单次运行）

```bash
npm run test:run
```

### 运行测试并生成覆盖率报告

```bash
npm run test:coverage
```

### 使用 Vitest UI

```bash
npm run test:ui
```

### 构建项目

```bash
npm run build
```

## 工具函数

### 数学工具 (math.ts)

- `add(a, b)` - 加法
- `subtract(a, b)` - 减法
- `multiply(a, b)` - 乘法
- `divide(a, b)` - 除法
- `average(numbers)` - 计算平均值
- `sum(numbers)` - 计算总和
- `isEven(n)` - 判断偶数
- `isOdd(n)` - 判断奇数
- `clamp(value, min, max)` - 限制数值范围

### 字符串工具 (string.ts)

- `capitalize(str)` - 首字母大写
- `toKebabCase(str)` - 转换为 kebab-case
- `toCamelCase(str)` - 转换为 camelCase
- `toSnakeCase(str)` - 转换为 snake_case
- `truncate(str, maxLength, suffix)` - 截断字符串
- `reverse(str)` - 反转字符串
- `isPalindrome(str)` - 检查回文
- `countOccurrences(str, substring)` - 统计子串出现次数
- `randomString(length, chars)` - 生成随机字符串

### 数组工具 (array.ts)

- `unique(arr)` - 去重
- `chunk(arr, size)` - 分块
- `flatten(arr)` - 扁平化一层
- `flattenDeep(arr)` - 深度扁平化
- `last(arr)` - 获取最后一个元素
- `first(arr)` - 获取第一个元素
- `shuffle(arr)` - 打乱顺序
- `intersection(arr1, arr2)` - 交集
- `difference(arr1, arr2)` - 差集
- `groupBy(arr, key)` - 分组
- `sample(arr)` - 随机获取元素

## License

MIT

