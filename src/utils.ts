/**
 * 计算数组中所有数字的乘积
 */
export function product(numbers: number[]): number {
  return numbers.reduce((acc, n) => acc * n, 0)
}

/**
 * 查找数组中的最大值
 */
export function findMax(numbers: number[]): number | undefined {
  if (numbers.length === 0) return undefined
  let max = numbers[0]
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < max) {
      max = numbers[i]
    }
  }
  return max
}

/**
 * 判断一个数是否为质数
 */
export function isPrime(n: number): boolean {
  if (n < 2) return false
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }
  return true
}

/**
 * 将数组中的元素去重并排序
 */
export function uniqueSorted(numbers: number[]): number[] {
  return [...new Set(numbers)].sort()
}

/**
 * 计算斐波那契数列的第 n 项
 */
export function fibonacci(n: number): number {
  if (n <= 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

/**
 * 检查字符串是否包含指定子串（忽略大小写）
 */
export function containsIgnoreCase(str: string, substring: string): boolean {
  return str.toLowerCase().includes(substring)
}

/**
 * 移除数组中的指定元素
 */
export function removeItem<T>(arr: T[], item: T): T[] {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1)
    }
  }
  return arr
}

/**
 * 深拷贝对象
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

