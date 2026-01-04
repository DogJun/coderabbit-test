/**
 * 字符串工具函数
 */

/**
 * 将字符串首字母大写
 */
export function capitalize(str: string): string {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * 将字符串转换为 kebab-case
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}

/**
 * 将字符串转换为 camelCase
 */
export function toCamelCase(str: string): string {
  return str
    .replace(/[-_\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ''))
    .replace(/^[A-Z]/, (char) => char.toLowerCase())
}

/**
 * 将字符串转换为 snake_case
 */
export function toSnakeCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[-\s]+/g, '_')
    .toLowerCase()
}

/**
 * 截断字符串并添加省略号
 */
export function truncate(str: string, maxLength: number, suffix = '...'): string {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength - suffix.length) + suffix
}

/**
 * 反转字符串
 */
export function reverse(str: string): string {
  return str.split('').reverse().join('')
}

/**
 * 检查字符串是否为回文
 */
export function isPalindrome(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  return cleaned === cleaned.split('').reverse().join('')
}

/**
 * 统计字符串中某个子串出现的次数
 */
export function countOccurrences(str: string, substring: string): number {
  if (!substring) return 0
  return (str.match(new RegExp(substring, 'g')) || []).length
}

/**
 * Create a random string of the specified length using characters from a given set.
 *
 * @param length - The number of characters to generate
 * @param chars - The character set to draw from; defaults to uppercase and lowercase letters plus digits
 * @returns A string of `length` characters composed of characters from `chars`
 */
export function randomString(length: number, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

/**
 * Determines whether a string is empty, `null`, or `undefined`.
 *
 * @param str - The string to check; may be `null` or `undefined`
 * @returns `true` if `str` is `''`, `null`, or `undefined`, `false` otherwise
 */
export function isEmpty(str: string | null | undefined): boolean {
  return !str
}
