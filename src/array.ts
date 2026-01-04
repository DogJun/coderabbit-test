/**
 * 数组工具函数
 */

/**
 * 获取数组的唯一值
 */
export function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)]
}

/**
 * 将数组分块
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  if (size <= 0) throw new Error('分块大小必须大于0')
  const result: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

/**
 * 扁平化数组
 */
export function flatten<T>(arr: (T | T[])[]): T[] {
  return arr.flat() as T[]
}

/**
 * 深度扁平化数组
 */
export function flattenDeep<T>(arr: unknown[]): T[] {
  return arr.flat(Infinity) as T[]
}

/**
 * 获取数组的最后一个元素
 */
export function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1]
}

/**
 * 获取数组的第一个元素
 */
export function first<T>(arr: T[]): T | undefined {
  return arr[0]
}

/**
 * 打乱数组顺序
 */
export function shuffle<T>(arr: T[]): T[] {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

/**
 * 获取两个数组的交集
 */
export function intersection<T>(arr1: T[], arr2: T[]): T[] {
  const set2 = new Set(arr2)
  return arr1.filter((item) => set2.has(item))
}

/**
 * 获取两个数组的差集
 */
export function difference<T>(arr1: T[], arr2: T[]): T[] {
  const set2 = new Set(arr2)
  return arr1.filter((item) => !set2.has(item))
}

/**
 * 根据指定属性对对象数组进行分组
 */
export function groupBy<T, K extends keyof T>(arr: T[], key: K): Record<string, T[]> {
  return arr.reduce(
    (groups, item) => {
      const groupKey = String(item[key])
      if (!groups[groupKey]) {
        groups[groupKey] = []
      }
      groups[groupKey].push(item)
      return groups
    },
    {} as Record<string, T[]>
  )
}

/**
 * 从数组中随机获取一个元素
 */
export function sample<T>(arr: T[]): T | undefined {
  if (arr.length === 0) return undefined
  return arr[Math.floor(Math.random() * arr.length)]
}

