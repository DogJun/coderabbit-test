/**
 * 数学工具函数
 */

/**
 * 两数相加
 */
export function add(a: number, b: number): number {
  return a + b
}

/**
 * 两数相减
 */
export function subtract(a: number, b: number): number {
  return a - b
}

/**
 * 两数相乘
 */
export function multiply(a: number, b: number): number {
  return a * b
}

/**
 * 两数相除
 * @throws 当除数为0时抛出错误
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('除数不能为0')
  }
  return a / b
}

/**
 * 计算数组的平均值
 */
export function average(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0
  }
  return numbers.reduce((sum, n) => sum + n, 0) / numbers.length
}

/**
 * 计算数组的总和
 */
export function sum(numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0)
}

/**
 * 判断是否为偶数
 */
export function isEven(n: number): boolean {
  return n % 2 === 0
}

/**
 * 判断是否为奇数
 */
export function isOdd(n: number): boolean {
  return n % 2 !== 0
}

/**
 * 限制数值在指定范围内
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

