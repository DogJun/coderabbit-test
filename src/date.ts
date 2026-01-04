/**
 * 日期工具函数
 */

/**
 * 格式化日期为 YYYY-MM-DD 格式
 */
export function formatDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

/**
 * 格式化日期为 YYYY-MM-DD HH:mm:ss 格式
 */
export function formatDateTime(date: Date): string {
  const dateStr = formatDate(date)
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  return `${dateStr} ${hours}:${minutes}:${seconds}`
}

/**
 * 判断是否为闰年
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

/**
 * 获取某月的天数
 */
export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate()
}

/**
 * 计算两个日期之间的天数差
 */
export function daysBetween(date1: Date, date2: Date): number {
  const oneDay = 24 * 60 * 60 * 1000
  const diff = Math.abs(date2.getTime() - date1.getTime())
  return Math.floor(diff / oneDay)
}

/**
 * 添加天数到日期
 */
export function addDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

/**
 * 添加月份到日期
 */
export function addMonths(date: Date, months: number): Date {
  const result = new Date(date)
  result.setMonth(result.getMonth() + months)
  return result
}

/**
 * 添加年份到日期
 */
export function addYears(date: Date, years: number): Date {
  const result = new Date(date)
  result.setFullYear(result.getFullYear() + years)
  return result
}

/**
 * 获取日期是一年中的第几天
 */
export function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = date.getTime() - start.getTime()
  const oneDay = 24 * 60 * 60 * 1000
  return Math.floor(diff / oneDay)
}

/**
 * 获取日期是一年中的第几周
 */
export function getWeekOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 1)
  const diff = date.getTime() - start.getTime()
  const oneWeek = 7 * 24 * 60 * 60 * 1000
  return Math.ceil((diff / oneWeek) + 1)
}

/**
 * 判断日期是否为今天
 */
export function isToday(date: Date): boolean {
  const today = new Date()
  return formatDate(date) === formatDate(today)
}

/**
 * 获取相对时间描述（如：刚刚、5分钟前、1小时前）
 */
export function getRelativeTime(date: Date): string {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (seconds < 60) return '刚刚'
  if (minutes < 60) return `${minutes}分钟前`
  if (hours < 24) return `${hours}小时前`
  if (days < 30) return `${days}天前`
  if (days < 365) return `${Math.floor(days / 30)}个月前`
  return `${Math.floor(days / 365)}年前`
}

